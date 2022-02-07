import { Chart, ChartData, ChartType, Plugin } from 'chart.js';
import { ComponentPublicInstance, computed, Ref, ref, unref } from 'vue';
import { ComponentData } from './components';
import { ChartPropsOptions, HookOptions } from './types';
import { ExtractPropTypes, MaybeRef } from './utils';
import { StyleValue } from './vue.types';

type DumbTypescript = 0;

type ChartHookReturnType<TType extends ChartType, TJSX = false> = {
  [K in DumbTypescript as `${TType}ChartRef`]: Ref<ComponentPublicInstance<
    ChartPropsOptions<TType>,
    ComponentData<TType>
  > | null>;
} & {
  [K in DumbTypescript as `${TType}ChartProps`]: Ref<ExtractPropTypes<HookOptions<TType, TJSX>>>;
};

const defineChartHook = <TType extends ChartType = ChartType, TJSX = false>(chartType: TType) => {
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
    jsx?: TJSX;
  }): ChartHookReturnType<TType, TJSX> => {
    const jsxRef = ref(null);
    const reactiveProps = computed(() => ({
      ...params,
      ...(!params.jsx && {
        ref: `${chartType}ChartRef`,
      }),
      ...(!params.jsx && {
        ref: jsxRef,
      }),
      chartData: unref(params.chartData),
      options: unref(params.options),
    }));

    return {
      [`${chartType}ChartProps`]: reactiveProps,
      [`${chartType}ChartRef`]: params.jsx ? jsxRef : ref(null),
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
