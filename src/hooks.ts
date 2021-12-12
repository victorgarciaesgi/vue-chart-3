import { computed, Ref, ref, unref } from '@vue/composition-api';
import { Chart, ChartData, ChartType, Plugin } from 'chart.js';
import { ComponentData } from './components';
import { ChartPropsOptions } from './types';
import { ExtractComponentData, ExtractComponentProps, MaybeRef } from './utils';
import { StyleValue, VueProxy } from './vue.types';

type DumbTypescript = 0;

type ChartHookReturnType<TType extends ChartType> = {
  [K in DumbTypescript as `${TType}ChartRef`]: Ref<
    ExtractComponentData<VueProxy<any, ComponentData<TType>>>
  >;
} & {
  [K in DumbTypescript as `${TType}ChartProps`]: Ref<
    ExtractComponentProps<VueProxy<ChartPropsOptions<TType>, ComponentData<TType>>>
  >;
};

const defineChartHook = <TType extends ChartType = ChartType>(chartType: TType) => {
  return (params: {
    chartData: MaybeRef<ChartData<TType>>;
    options?: MaybeRef<Record<string, any>>;
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

    return {
      [`${chartType}ChartProps`]: reactiveProps,
      [`${chartType}ChartRef`]: ref(null),
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
