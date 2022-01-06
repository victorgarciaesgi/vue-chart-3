import { defineChartComponent } from './components';

export { defineChartComponent } from './components';
export type { ExtractComponentData, ExtractComponentProps } from './utils';

export * from './hooks';

export const BarChart = defineChartComponent('bar-chart', 'bar');
export const DoughnutChart = defineChartComponent('doughnut-chart', 'doughnut');
export const LineChart = defineChartComponent('line-chart', 'line');
export const PieChart = defineChartComponent('pie-chart', 'pie');
export const PolarAreaChart = defineChartComponent('polar-chart', 'polarArea');
export const RadarChart = defineChartComponent('radar-chart', 'radar');
export const BubbleChart = defineChartComponent('bubble-chart', 'bubble');
export const ScatterChart = defineChartComponent('scatter-chart', 'scatter');

export default {
  BarChart,
  DoughnutChart,
  LineChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  BubbleChart,
  ScatterChart,
  defineChartComponent,
};
