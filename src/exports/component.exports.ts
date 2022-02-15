import { defineChartComponent } from '../core/component.builder';

/**
 * A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.
 *
 * {@link - https://www.chartjs.org/docs/latest/charts/bar.html}
 * {@link - https://vue-chart-3.netlify.app/components/#list-of-all-components}
 */
export const BarChart = defineChartComponent('bar-chart', 'bar');

/**
 * Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.
 *
 * {@link - https://www.chartjs.org/docs/latest/charts/doughnut.html }
 * {@link - https://vue-chart-3.netlify.app/components/#list-of-all-components}
 */
export const DoughnutChart = defineChartComponent('doughnut-chart', 'doughnut');

/**
 * A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.
 *
 * {@link - https://www.chartjs.org/docs/latest/charts/line.html }
 * {@link - https://vue-chart-3.netlify.app/components/#list-of-all-components}
 */
export const LineChart = defineChartComponent('line-chart', 'line');

/**
 * Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.
 *
 * {@link - https://www.chartjs.org/docs/latest/charts/doughnut.html#pie }
 * {@link - https://vue-chart-3.netlify.app/components/#list-of-all-components}
 */
export const PieChart = defineChartComponent('pie-chart', 'pie');

/**
 * Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.
 *
 * {@link - https://www.chartjs.org/docs/latest/charts/polar.html }
 * {@link - https://vue-chart-3.netlify.app/components/#list-of-all-components}
 */
export const PolarAreaChart = defineChartComponent('polar-chart', 'polarArea');

/**
 * A radar chart is a way of showing multiple data points and the variation between them.
 *
 * {@link - https://www.chartjs.org/docs/latest/charts/radar.html }
 * {@link - https://vue-chart-3.netlify.app/components/#list-of-all-components}
 */
export const RadarChart = defineChartComponent('radar-chart', 'radar');

/**
 * A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles.
 *
 * {@link - https://www.chartjs.org/docs/latest/charts/bubble.html }
 * {@link - https://vue-chart-3.netlify.app/components/#list-of-all-components}
 */
export const BubbleChart = defineChartComponent('bubble-chart', 'bubble');

/**
 * Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties. The example below creates a scatter chart with 4 points.
 *
 * {@link - https://www.chartjs.org/docs/latest/charts/scatter.html }
 * {@link - https://vue-chart-3.netlify.app/components/#list-of-all-components}
 */
export const ScatterChart = defineChartComponent('scatter-chart', 'scatter');
