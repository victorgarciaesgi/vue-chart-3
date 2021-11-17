import { DefineComponent } from '@vue/runtime-core';
import { Chart, ChartData, ChartOptions, ChartType, Plugin } from 'chart.js';
import {
  computed,
  reactive,
  Ref,
  ref,
  toRefs,
  unref,
  watch,
  shallowRef
} from 'vue';
import { ComponentData } from './components';
import { ChartPropsOptions } from './types';
import { ExtractComponentData, ExtractComponentProps, MaybeRef } from './utils';
import { StyleValue } from './vue.types';

type DumbTypescript = 0;
type TemplateRefType<TType extends ChartType> = ExtractComponentData<DefineComponent<any, ComponentData<TType>>>

type ChartHookReturnType<TType extends ChartType> = 
  {
    [K in DumbTypescript as `${TType}ChartProps`]: Ref<
      ExtractComponentProps<DefineComponent<ChartPropsOptions<TType>, ComponentData<TType>>>
    >;
  } & {
    chartInstance: Ref<Chart<TType> | null>,
    chartTemplateRef: Ref<
    TemplateRefType<TType>
  >;
  };


const defineChartHook = <TType extends ChartType = ChartType>(chartType: TType) => {
  return (params: {
    chartData: MaybeRef<ChartData<TType>>;
    options?: MaybeRef<ChartOptions<TType>>;
    width?: number;
    height?: number;
    cssClasses?: string;
    styles?: StyleValue;
    plugins?: Plugin[];
    onLabelsUpdate?: () => void;
    onChartUpdate?: (chartInstance: Chart<TType>) => void;
    onChartDestroy?: () => void;
    onChartRender?: (chartInstance: Chart<TType>) => void;
  }): ChartHookReturnType<TType> => {

    const reactiveProps = computed(() => ({
      ...params,
      ref: 'chartTemplateRef',
      chartData: unref(params.chartData),
      options: unref(params.options),
      chartTemplateRef: chartTemplateRef.value
    }));

    const chartInstance = shallowRef<Chart<TType> | null>(null)
    const chartTemplateRef = ref<TemplateRefType<TType> | null>(null);
    

    const chartProps = reactive({
      [`${chartType}ChartProps`]: reactiveProps,
    });

    watch(chartTemplateRef, (value) => {
      if (value?.chartInstance) {
        chartInstance.value = value.chartInstance as Chart<TType>
      }
    },{
      flush: 'post'
    })

    return {
      ...toRefs(chartProps),
      chartInstance,
      chartTemplateRef: chartTemplateRef as any 
    }
  };
};

export const useDoughnutChart = defineChartHook('doughnut');
export const useBarChart = defineChartHook('bar');
export const useLineChart = defineChartHook('line');
export const usePieChart = defineChartHook('pie');
export const usePolarAreaChart = defineChartHook('polarArea');
export const useRadarChart = defineChartHook('radar');
export const useBubbleChart = defineChartHook('bubble');
export const useScatterChart = defineChartHook('scatter');
