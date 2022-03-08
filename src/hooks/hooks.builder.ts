import { Chart, ChartData, ChartType, Plugin } from 'chart.js';
import { pascalCase } from '../utils';
import { computed, ref, unref } from 'vue';
import { VueChartComponent } from '.';
import type { StyleValue } from '../misc';
import { ExtractComponentData, MaybeRef } from '../utils';
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
    /** Pass to true to return the correct jsx props */
    jsx?: boolean;
  }): ChartHookReturnType<TType, TJSX> => {
    const CHART_REF_NAME = `${chartType}ChartRef`;
    const _struct = {
      [CHART_REF_NAME]: ref<ExtractComponentData<VueChartComponent<TType>>>(),
    };
    const reactiveProps = computed(() => ({
      ...params,
      ...(params.jsx && {
        ref: _struct[CHART_REF_NAME],
      }),
      ...(!params.jsx && {
        ref: CHART_REF_NAME,
      }),
      chartData: unref(params.chartData),
      options: unref(params.options),
    }));

    function update() {
      const chartComponentRef = _struct[CHART_REF_NAME].value;
      if (chartComponentRef) {
        chartComponentRef?.chartInstance.value?.update();
      } else {
        console.warn(`No chartInstance to update (use${pascalCase(chartType)}Chart)`);
      }
    }

    return {
      [`${chartType}ChartProps`]: reactiveProps,
      [CHART_REF_NAME]: _struct[CHART_REF_NAME],
      update,
    };
  };
};
