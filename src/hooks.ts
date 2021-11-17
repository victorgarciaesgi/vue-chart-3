import { DefineComponent } from '@vue/runtime-core';
import { Chart, ChartData, ChartOptions, ChartType, Plugin } from 'chart.js';
import {
  computed,
  reactive,
  Ref,
  ref,
  toRefs,
  unref,
} from 'vue';
import { ComponentData } from './components';
import { ChartPropsOptions } from './types';
import { ExtractComponentData, ExtractComponentProps, MaybeRef } from './utils';
import { StyleValue } from './vue.types';

type DumbTypescript = 0;

type ChartHookReturnType<TType extends ChartType> = {
  [K in DumbTypescript as `${TType}ChartRef`]: Ref<
    ExtractComponentData<DefineComponent<any, ComponentData<TType>>>
  >;
} &
  {
    [K in DumbTypescript as `${TType}ChartProps`]: Ref<
      ExtractComponentProps<DefineComponent<ChartPropsOptions<TType>, ComponentData<TType>>>
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
      ref: `${chartType}ChartRef`,
      chartData: unref(params.chartData),
      options: unref(params.options),
    }));

    const chartProps = reactive({
      [`${chartType}ChartProps`]: reactiveProps,
    });

    return {
      ...toRefs(chartProps),
      [`${chartType}ChartRef`]: ref<ExtractComponentData<DefineComponent<any, ComponentData<TType>>>>(),
    };
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
