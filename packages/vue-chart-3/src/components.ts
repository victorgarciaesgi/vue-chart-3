import { Chart, ChartData, ChartOptions, ChartType, Plugin, ChartDataset } from 'chart.js';
import {
  ref,
  PropType,
  onMounted,
  h,
  onBeforeUnmount,
  watch,
  Ref,
  isVue2,
  isVue3,
  install,
  defineComponent,
} from 'vue-demi';
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';
import deepEqual from 'deep-equal';
import type { DefineComponent } from '@vue/runtime-core';
import { StyleValue, VueProxy } from './vueproxy.types';

install();

const pascalCase = (str: string) => startCase(camelCase(str)).replace(/ /g, '');

type ComponentData = { canvasRef: Ref<HTMLCanvasElement | undefined>; renderChart: () => void };
type BetterChartOptions<TType extends ChartType> = {} & ObjectConstructor & ChartOptions<TType>;

export const defineChartComponent = <TType extends ChartType = ChartType>(
  chartId: string,
  chartType: TType
) => {
  const propsDefs = {
    options: { type: Object as PropType<ChartOptions<TType>>, required: false },
    chartId: { default: chartId, type: String },
    width: { default: 400, type: Number },
    height: { default: 400, type: Number },
    cssClasses: { type: String, default: '' },
    styles: { type: Object as PropType<StyleValue> },
    plugins: { type: Array as PropType<Plugin[]>, default: () => [] },
    chartData: { type: Object as PropType<ChartData<TType>>, required: true },
    onLabelsUpdate: { type: Function as PropType<() => void> },
    onChartUpdate: { type: Function as PropType<(chartInstance: Chart<TType>) => void> },
    onChartDestroy: { type: Function as PropType<() => void> },
    onChartRender: { type: Function as PropType<(chartInstance: Chart<TType>) => void> },
  } as const;

  const componentName = pascalCase(chartId);

  return defineComponent({
    name: componentName,
    props: propsDefs,
    emits: {
      'labels:update': () => true,
      'chart:update': (chartInstance: Chart<TType>) => true,
      'chart:destroy': (chartInstance: Chart<TType>) => true,
      'chart:render': () => true,
    },
    setup(props, { emit }): ComponentData {
      const canvasRef = ref<HTMLCanvasElement>();

      let chartInstance: Chart<TType> | null = null;

      const previousOptions = ref<ChartOptions>({});

      watch(() => props.chartData, watchHandler, { deep: true });
      watch(
        () => props.options,
        () => {
          if (
            chartInstance &&
            props.options &&
            !deepEqual(chartInstance.options, previousOptions.value)
          ) {
            chartInstance.options = props.options as any;
            previousOptions.value = props.options as any;
            chartInstance?.update();
            handleChartUpdate();
          }
        },
        { deep: true }
      );

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
            data: props.chartData,
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

      return { canvasRef, renderChart };
    },
    render() {
      return h(
        'div',
        {
          style: {
            maxWidth: '100%',
            ...(this.styles as any),
          },
          class: this.cssClasses,
        },
        [
          h('canvas', {
            ...(isVue2 && {
              attrs: {
                id: this.chartId,
                width: this.width,
                height: this.height,
              },
            }),
            ...(isVue3 && {
              id: this.chartId,
              width: this.width,
              height: this.height,
            }),
            ref: 'canvasRef',
          }),
        ]
      );
    },
  }) as unknown as VueProxy<typeof propsDefs, ComponentData>;
};
