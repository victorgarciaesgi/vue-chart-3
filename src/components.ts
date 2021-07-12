import { Chart, ChartData, ChartOptions, ChartType, Plugin, ChartDataset } from 'chart.js';
import {
  ref,
  defineComponent,
  PropType,
  onMounted,
  h,
  onBeforeUnmount,
  watch,
  Ref,
} from 'vue-demi';
import type { CSSProperties } from '@vue/runtime-dom';
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';

export type StyleValue = string | CSSProperties | Array<StyleValue>;

const pascalCase = (str: string) => startCase(camelCase(str)).replace(/ /g, '');

type ComponentData = { canvasRef: Ref<HTMLCanvasElement> };

export const defineChartComponent = <TType extends ChartType = ChartType>(
  chartId: string,
  chartType: TType
) => {
  const propsDefs = {
    chartId: { default: chartId, type: String },
    width: { default: 400, type: Number },
    height: { default: 400, type: Number },
    cssClasses: { type: String, default: '' },
    styles: { type: Object as PropType<StyleValue> },
    plugins: { type: Array as PropType<Plugin[]>, default: () => [] },
    data: { type: Object as PropType<ChartData<TType>>, required: true },
    options: { type: Object as PropType<ChartOptions<TType>> },
    onLabelsUpdate: { type: Function as PropType<() => void> },
    onChartUpdate: { type: Function as PropType<(chartInstance: Chart<TType>) => void> },
    onChartDestroy: { type: Function as PropType<() => void> },
    onChartRender: { type: Function as PropType<(chartInstance: Chart<TType>) => void> },
  } as const;

  const componentName = pascalCase(chartType);

  return defineComponent({
    name: componentName,
    props: propsDefs,
    emits: {
      'labels:update': () => true,
      'chart:update': (chartInstance: Chart<TType>) => true,
      'chart:destroy': (chartInstance: Chart<TType>) => true,
      'chart:render': () => true,
    },
    setup(props, { emit }) {
      //- Template refs
      const canvasRef = ref<HTMLCanvasElement>();

      //- Data

      let chartInstance: Chart<TType> | null = null;

      //- Watchers

      watch(() => props.data, watchHandler, { deep: true });
      // watch(
      //   () => props.options,
      //   () => {
      //     chartInstance?.update();
      //     emit('chart:update', chartInstance);
      //   },
      //   { deep: true }
      // );
      //- Functions

      /** Picked from vue-chartjs */
      function watchHandler(newData: ChartData, oldData: ChartData) {
        if (oldData) {
          let chart = chartInstance;

          // Get new and old DataSet Labels
          let newDatasetLabels = newData.datasets.map((dataset) => {
            return dataset.label;
          });

          let oldDatasetLabels = oldData.datasets.map((dataset) => {
            return dataset.label;
          });

          // Stringify 'em for easier compare
          const oldLabels = JSON.stringify(oldDatasetLabels);
          const newLabels = JSON.stringify(newDatasetLabels);

          // Check if Labels are equal and if dataset length is equal
          if (
            newLabels === oldLabels &&
            oldData.datasets.length === newData.datasets.length &&
            chart
          ) {
            newData.datasets.forEach((dataset, i) => {
              // Get new and old dataset keys
              const oldDatasetKeys = Object.keys(oldData.datasets[i]);
              const newDatasetKeys = Object.keys(dataset);

              // Get keys that aren't present in the new data
              const deletionKeys = oldDatasetKeys.filter((key) => {
                return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
              });

              // Remove outdated key-value pairs
              deletionKeys.forEach((deletionKey) => {
                if (chart?.data.datasets[i]) {
                  delete chart.data.datasets[i][deletionKey as keyof ChartDataset];
                }
              });

              // Update attributes individually to avoid re-rendering the entire chart
              for (const attribute in dataset) {
                const attrValue = dataset[attribute as keyof ChartDataset];
                if (dataset.hasOwnProperty(attribute) && attrValue && chart) {
                  (chart.data as any).datasets[i][attribute] = attrValue;
                }
              }
            });

            if (newData.hasOwnProperty('labels')) {
              chart.data.labels = newData.labels;
              handleLabelsUpdate();
            }
            chart.update();
            handleChartUpdate();
          } else {
            if (chart) {
              chart.destroy();
              handleChartDestroy();
            }
            renderChart();
          }
        } else {
          if (chartInstance) {
            chartInstance.destroy();
            handleChartDestroy();
          }
          renderChart();
        }
      }

      function renderChart() {
        if (canvasRef.value) {
          chartInstance = new Chart(canvasRef.value, {
            data: props.data,
            type: chartType,
            options: props.options as ChartOptions<TType>, // Types won't work with props type
            plugins: props.plugins,
          });
          handleChartRender();
        } else {
          console.error(
            `Error on component ${componentName}, canvas cannot be rendered. Check if the render appends server-side`
          );
        }
      }

      function handleLabelsUpdate() {
        emit('labels:update');
        props.onLabelsUpdate?.();
      }

      function handleChartRender() {
        if (chartInstance) {
          emit('chart:render', chartInstance);
          props.onChartRender?.(chartInstance);
        }
      }

      function handleChartUpdate() {
        if (chartInstance) {
          emit('chart:render', chartInstance);
          props.onChartRender?.(chartInstance);
        }
      }

      function handleChartDestroy() {
        emit('chart:destroy');
        props.onChartDestroy?.();
      }

      //- Hooks

      onMounted(renderChart);

      onBeforeUnmount(() => {
        if (chartInstance) {
          chartInstance.destroy();
        }
      });

      return { canvasRef } as const;
    },
    render() {
      return h(
        'div',
        {
          style: this.styles as any,
          class: this.cssClasses,
        },
        [
          h('canvas', {
            id: this.chartId,
            width: this.width,
            height: this.height,
            ref: 'canvasRef',
          }),
        ]
      );
    },
  });
};
