import { Chart, ChartData, ChartType, Plugin } from 'chart.js';
import { DefineComponent, PropType, Ref, ShallowRef } from 'vue';
import { StyleValue } from '../misc';

export type ComponentData<T extends ChartType> = {
  /** Access to the canvas via computed template ref */
  canvasRef: Ref<HTMLCanvasElement | undefined>;
  /** Force render the Chart */
  renderChart: () => void;
  /** The complete chart instance */
  chartInstance: ShallowRef<Chart<T> | null>;
  /** The id of the Chart.js canvas element */
  canvasId: string;
  /** Force update the Chart */
  update: () => void;
};

export type ChartComponentEmits<TType extends ChartType> = {
  'labels:update': () => void;
  'chart:update': (chartInstance: Chart<TType>) => void;
  'chart:destroy': () => void;
  'chart:render': (chartInstance: Chart<TType>) => void;
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
