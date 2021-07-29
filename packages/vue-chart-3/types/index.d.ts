export { defineChartComponent } from './components';
export { ExtractComponentData, ExtractComponentProps } from './utils';
export * from './hooks';
export declare const BarChart: import('./vueproxy.types').VueProxy<
  import('./types').ChartPropsOptions<'bar'>,
  import('./components').ComponentData<'bar'>,
  import('vue/types/options').DefaultData<import('vue/types/umd')>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').DefaultMethods<import('vue/types/umd')>
>;
export declare const DoughnutChart: import('./vueproxy.types').VueProxy<
  import('./types').ChartPropsOptions<'doughnut'>,
  import('./components').ComponentData<'doughnut'>,
  import('vue/types/options').DefaultData<import('vue/types/umd')>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').DefaultMethods<import('vue/types/umd')>
>;
export declare const LineChart: import('./vueproxy.types').VueProxy<
  import('./types').ChartPropsOptions<'line'>,
  import('./components').ComponentData<'line'>,
  import('vue/types/options').DefaultData<import('vue/types/umd')>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').DefaultMethods<import('vue/types/umd')>
>;
export declare const PieChart: import('./vueproxy.types').VueProxy<
  import('./types').ChartPropsOptions<'pie'>,
  import('./components').ComponentData<'pie'>,
  import('vue/types/options').DefaultData<import('vue/types/umd')>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').DefaultMethods<import('vue/types/umd')>
>;
export declare const PolarAreaChart: import('./vueproxy.types').VueProxy<
  import('./types').ChartPropsOptions<'polarArea'>,
  import('./components').ComponentData<'polarArea'>,
  import('vue/types/options').DefaultData<import('vue/types/umd')>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').DefaultMethods<import('vue/types/umd')>
>;
export declare const RadarChart: import('./vueproxy.types').VueProxy<
  import('./types').ChartPropsOptions<'radar'>,
  import('./components').ComponentData<'radar'>,
  import('vue/types/options').DefaultData<import('vue/types/umd')>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').DefaultMethods<import('vue/types/umd')>
>;
export declare const BubbleChart: import('./vueproxy.types').VueProxy<
  import('./types').ChartPropsOptions<'bubble'>,
  import('./components').ComponentData<'bubble'>,
  import('vue/types/options').DefaultData<import('vue/types/umd')>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').DefaultMethods<import('vue/types/umd')>
>;
export declare const ScatterChart: import('./vueproxy.types').VueProxy<
  import('./types').ChartPropsOptions<'scatter'>,
  import('./components').ComponentData<'scatter'>,
  import('vue/types/options').DefaultData<import('vue/types/umd')>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').DefaultMethods<import('vue/types/umd')>
>;
declare const _default: {
  BarChart: import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<'bar'>,
    import('./components').ComponentData<'bar'>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
  DoughnutChart: import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<'doughnut'>,
    import('./components').ComponentData<'doughnut'>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
  LineChart: import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<'line'>,
    import('./components').ComponentData<'line'>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
  PieChart: import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<'pie'>,
    import('./components').ComponentData<'pie'>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
  PolarAreaChart: import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<'polarArea'>,
    import('./components').ComponentData<'polarArea'>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
  RadarChart: import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<'radar'>,
    import('./components').ComponentData<'radar'>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
  BubbleChart: import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<'bubble'>,
    import('./components').ComponentData<'bubble'>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
  ScatterChart: import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<'scatter'>,
    import('./components').ComponentData<'scatter'>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
  defineChartComponent: <
    TType extends
      | 'bar'
      | 'line'
      | 'scatter'
      | 'bubble'
      | 'pie'
      | 'doughnut'
      | 'polarArea'
      | 'radar' = 'bar' | 'line' | 'scatter' | 'bubble' | 'pie' | 'doughnut' | 'polarArea' | 'radar'
  >(
    chartId: string,
    chartType: TType
  ) => import('./vueproxy.types').VueProxy<
    import('./types').ChartPropsOptions<TType>,
    import('./components').ComponentData<TType>,
    import('vue/types/options').DefaultData<import('vue/types/umd')>,
    import('vue/types/options').DefaultComputed,
    import('vue/types/options').DefaultMethods<import('vue/types/umd')>
  >;
};
export default _default;
