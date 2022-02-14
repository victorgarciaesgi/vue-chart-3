import { Chart, ChartData, ChartType, Plugin } from 'chart.js';
import { PropType, Ref, ShallowRef } from 'vue';
import { StyleValue } from '../misc';

export type ComponentData<T extends ChartType> = {
  canvasRef: Ref<HTMLCanvasElement | undefined>;
  renderChart: () => void;
  chartInstance: ShallowRef<Chart<T> | null>;
  canvasId: string;
};

export type ChartPropsOptions<TType extends ChartType> = {
  options: { type: PropType<Record<string, any>>; required: false };
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

export type ChartProps<TType extends ChartType> = {
  options?: Record<any, any>;
  chartId?: string;
  width?: number;
  height?: number;
  cssClasses?: string;
  styles?: StyleValue;
  plugins?: Plugin[];
  chartData?: ChartData<TType>;
  onLabelsUpdate?: () => void;
  onChartUpdate?: (chartInstance: Chart<TType>) => void;
  onChartDestroy?: () => void;
  onChartRender?: (chartInstance: Chart<TType>) => void;
};
