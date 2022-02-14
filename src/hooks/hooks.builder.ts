import { Chart, ChartData, ChartType, Plugin } from 'chart.js';
import { computed, ref, unref } from 'vue';
import type { StyleValue } from '../misc';
import { MaybeRef } from '../utils';
import type { ChartHookReturnType } from './hooks.types';

export const defineChartHook = <TType extends ChartType = ChartType, TJSX = false>(
  chartType: TType
) => {
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
  }): ChartHookReturnType<TType, TJSX> => {
    const CHART_REF_NAME = `${chartType}ChartRef`;
    const jsxRef = {
      [CHART_REF_NAME]: ref(null),
    };
    const reactiveProps = computed(() => ({
      ...params,
      ref: CHART_REF_NAME,
      chartData: unref(params.chartData),
      options: unref(params.options),
    }));

    return {
      [`${chartType}ChartProps`]: reactiveProps,
      [CHART_REF_NAME]: ref(null),
    };
  };
};
