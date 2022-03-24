import { Chart, ChartData, ChartOptions, ChartType, Plugin, ChartDataset } from 'chart.js';
import VueComp, {
  ref,
  PropType,
  onMounted,
  h,
  onBeforeUnmount,
  watch,
  Ref,
  defineComponent,
  shallowRef,
  set,
} from '@vue/composition-api';
import startCase from 'lodash-es/startCase.js';
import camelCase from 'lodash-es/camelCase.js';
import cloneDeep from 'lodash-es/cloneDeep.js';
import isEqual from 'lodash-es/isEqual.js';
import isEmpty from 'lodash-es/isEmpty.js';

// Weird bug with karma importing cjs files
import { nanoid } from 'nanoid';

import { StyleValue, VueProxy } from './vue.types';
import { ChartPropsOptions } from './types';

const pascalCase = (str: string) => startCase(camelCase(str)).replace(/ /g, '');

export type ComponentData<T extends ChartType> = {
  canvasRef: Ref<HTMLCanvasElement | undefined>;
  renderChart: () => void;
  chartInstance: Chart<T> | null;
  canvasId: string;
};

export const defineChartComponent = <TType extends ChartType = ChartType>(
  chartId: string,
  chartType: TType
) => {
  const propsDefs: ChartPropsOptions<TType> = {
    options: { type: Object, required: false },
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
  };

  const componentName = pascalCase(chartId);

  return defineComponent({
    name: componentName,
    props: propsDefs,
    emits: {
      'labels:update': () => true,
      'chart:update': (chartInstance: Chart<TType>) => true,
      'chart:destroy': () => true,
      'chart:render': (chartInstance: Chart<TType>) => true,
    },
    setup(props, { emit }) {
      const canvasRef = ref<HTMLCanvasElement>();

      const canvasId = `${chartId}-${nanoid(6)}`;

      let chartInstance = shallowRef<Chart<TType> | null>(null);

      watch(() => props.chartData, watchHandler, { deep: true });
      watch(
        () => props.options,
        (newOptions) => {
          if (chartInstance.value && newOptions) {
            chartInstance.value.options = cloneDeep(newOptions) as any;
            handleChartUpdate();
          }
        },
        { deep: true }
      );

      /** Picked from vue-chartjs */
      function watchHandler(newData: ChartData<TType>) {
        if (chartInstance.value) {
          let chart = chartInstance.value;
          if (!isEqual(newData.labels, chartInstance.value.data.labels)) {
            chart.data.labels = newData.labels;
            handleLabelsUpdate();
          }

          // Check if datasets are equals
          if (!isEqual(newData.datasets, chartInstance.value.data.datasets)) {
            newData.datasets.forEach((dataset, index) => {
              if (!isEmpty(dataset)) {
                const oldData = cloneDeep(chart.data);

                const oldDatasetKeys = Object.keys(oldData.datasets?.[index] ?? {});
                const newDatasetKeys = Object.keys(dataset);

                // Get keys that aren't present in the new data
                const deletionKeys = oldDatasetKeys.filter((key) => {
                  return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
                });

                // Remove outdated key-value pairs
                deletionKeys.forEach((deletionKey) => {
                  if (chart.data.datasets[index]) {
                    delete chart.data.datasets[index][deletionKey as keyof ChartDataset];
                  }
                });

                // Update attributes individually to avoid re-rendering the entire chart
                for (const attribute in dataset) {
                  const attrValue = cloneDeep(dataset[attribute as keyof ChartDataset]);
                  let datasetItem = chart.data.datasets[index] as any;
                  if (!datasetItem) {
                    chart.data.datasets[index] = {} as any;
                  }
                  if (dataset.hasOwnProperty(attribute) && attrValue != null && chart) {
                    (chart.data.datasets[index] as any)[attribute] = attrValue;
                  }
                }
              } else {
                chart.data.datasets = [];
              }
            });
          }

          handleChartUpdate();
        } else {
          if (chartInstance.value) {
            handleChartDestroy();
          }
          renderChart();
        }
      }

      function renderChart() {
        if (canvasRef.value) {
          chartInstance.value = new Chart(canvasRef.value, {
            data: props.chartData,
            type: chartType,
            options: cloneDeep(props.options) as ChartOptions<TType>, // Types won't work with props type
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
        if (chartInstance.value) {
          emit('chart:render', chartInstance.value);
          props.onChartRender?.(chartInstance.value);
        }
      }

      function handleChartUpdate() {
        if (chartInstance.value) {
          chartInstance.value.update();
          emit('chart:render', chartInstance.value);
          props.onChartRender?.(chartInstance.value);
        }
      }

      function handleChartDestroy() {
        chartInstance.value?.destroy();
        emit('chart:destroy');
        props.onChartDestroy?.();
      }

      //- Hooks

      onMounted(renderChart);

      onBeforeUnmount(() => {
        if (chartInstance.value) {
          chartInstance.value?.destroy();
        }
      });

      return { canvasRef, renderChart, chartInstance, canvasId } as const;
    },
    render() {
      return h(
        'div',
        {
          style: {
            maxWidth: '100%',
            ...(this.styles as any),
            position: 'relative',
          },
          class: this.cssClasses,
        },
        [
          h('canvas', {
            style: {
              maxWidth: '100%',
              maxHeight: '100%',
            },
            attrs: {
              id: this.canvasId,
              width: this.width,
              height: this.height,
            },
            ref: 'canvasRef',
          }),
        ]
      );
    },
  }) as VueProxy<ChartPropsOptions<TType>, ComponentData<TType>>;
};
