import { defineChartComponent } from './components';

export { defineChartComponent } from './components';

export const Bar = defineChartComponent('bar-chart', 'bar');
export const Doughnut = defineChartComponent('doughnut-chart', 'doughnut');
export const Line = defineChartComponent('line-chart', 'line');
export const Pie = defineChartComponent('pie-chart', 'pie');
export const PolarArea = defineChartComponent('polar-chart', 'polarArea');
export const Radar = defineChartComponent('radar-chart', 'radar');
export const Bubble = defineChartComponent('bubble-chart', 'bubble');
export const Scatter = defineChartComponent('scatter-chart', 'scatter');

export default {
  Bar,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Bubble,
  Scatter,
  defineChartComponent,
};
