import type { Chart, ChartData, ChartOptions, Plugin, ChartType } from 'chart.js';
import { PropType } from 'vue-demi';
import type { StyleValue } from './vueproxy.types';

export type ChartPropsOptions<TType extends ChartType> = {
  options: { type: PropType<ChartOptions<TType>>; required: false };
  chartId: { default: string; type: StringConstructor };
  width: { default: 400; type: NumberConstructor };
  height: { default: 400; type: NumberConstructor };
  cssClasses: { type: StringConstructor; default: string };
  styles: { type: PropType<StyleValue> };
  plugins: { type: PropType<Plugin[]>; default: () => any[] };
  chartData: { type: PropType<ChartData<TType>>; required: true };
  onLabelsUpdate: { type: PropType<() => void> };
  onChartUpdate: { type: PropType<(chartInstance: Chart<TType>) => void> };
  onChartDestroy: { type: PropType<() => void> };
  onChartRender: { type: PropType<(chartInstance: Chart<TType>) => void> };
};
