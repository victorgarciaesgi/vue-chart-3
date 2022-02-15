import {
  Chart,
} from 'chart.js';

declare module 'chart.js' {
  export interface ChartTypeRegistry {
    mixedBarLine: {
      chartOptions: CoreChartOptions<'mixedBarLine'>;
    };
  }
}