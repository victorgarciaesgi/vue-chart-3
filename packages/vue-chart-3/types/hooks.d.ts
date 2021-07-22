import { Chart, ChartData, ChartType } from 'chart.js';
import { Ref } from 'vue-demi';
import { ComponentData } from './components';
import { ChartPropsOptions } from './types';
import { ExtractComponentData, ExtractComponentProps, MaybeRef } from './utils';
import { StyleValue, VueProxy } from './vueproxy.types';
declare type DumbTypescript = 0;
declare type ChartHookReturnType<TType extends ChartType> = {
    [K in DumbTypescript as `${TType}ChartRef`]: Ref<ExtractComponentData<VueProxy<any, ComponentData<TType>>>>;
} & {
    [K in DumbTypescript as `${TType}ChartProps`]: Ref<ExtractComponentProps<VueProxy<ChartPropsOptions<TType>, ComponentData<TType>>>>;
} & {
    chartInstance: Ref<Chart<TType> | null>;
};
export declare const useDoughnutChart: (params: {
    chartData: MaybeRef<ChartData<"doughnut", number[], unknown>>;
    options?: MaybeRef<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"doughnut", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"doughnut", number[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"doughnut">;
export declare const useBarChart: (params: {
    chartData: MaybeRef<ChartData<"bar", number[], unknown>>;
    options?: MaybeRef<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"bar", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"bar", number[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"bar">;
export declare const useLineChart: (params: {
    chartData: MaybeRef<ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
    options?: MaybeRef<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"line">;
export declare const usePieChart: (params: {
    chartData: MaybeRef<ChartData<"pie", number[], unknown>>;
    options?: MaybeRef<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"pie", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"pie", number[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"pie">;
export declare const usePolarAreaChart: (params: {
    chartData: MaybeRef<ChartData<"polarArea", number[], unknown>>;
    options?: MaybeRef<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"polarArea", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"polarArea", number[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"polarArea">;
export declare const useRadarChart: (params: {
    chartData: MaybeRef<ChartData<"radar", (number | null)[], unknown>>;
    options?: MaybeRef<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"radar", (number | null)[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"radar">;
export declare const useBubbleChart: (params: {
    chartData: MaybeRef<ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
    options?: MaybeRef<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"bubble">;
export declare const useScatterChart: (params: {
    chartData: MaybeRef<ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
    options?: MaybeRef<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"scatter">;
export {};
