import * as chart_js from 'chart.js';
import { ChartType, ChartOptions, Plugin, ChartData, Chart } from 'chart.js';
import * as vue_types_options from 'vue/types/options';
import { DefaultData, DefaultComputed, DefaultMethods } from 'vue/types/options';
import * as vue from 'vue';
import vue__default, { VueConstructor } from 'vue';
import { ComputedOptions, MethodOptions, ShallowUnwrapRef, ExtractPropTypes, ComponentRenderProxy, ExtractDefaultPropTypes, PropType, Ref, ComputedRef } from '@vue/composition-api';
import { ComponentOptions } from 'vue/types/umd';
import CSS from 'csstype';
import * as chart_js_types_basic from 'chart.js/types/basic';

interface CSSProperties extends CSS.Properties<string | number>, CSS.PropertiesHyphen<string | number> {
}
declare type StyleValue = string | CSSProperties | Array<StyleValue>;
declare type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;
declare type EmitsOptions = ObjectEmitsOptions | string[];
declare type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {
    [K in string & `on${Capitalize<T[number]>}`]?: (...args: any[]) => any;
} : T extends ObjectEmitsOptions ? {
    [K in string & `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never;
} : {};
declare type VueConstructorProxy<PropsOptions, RawBindings, Data, Computed extends ComputedOptions, Methods extends MethodOptions, Mixin = {}, Extends = {}, Emits extends EmitsOptions = {}, Props = ExtractPropTypes<PropsOptions> & ({} extends Emits ? {} : EmitsToProps<Emits>)> = Omit<VueConstructor, never> & {
    new (...args: any[]): ComponentRenderProxy<Props, ShallowUnwrapRef<RawBindings>, Data, Computed, Methods, Mixin, Extends, Emits, Props, ExtractDefaultPropTypes<PropsOptions>, true>;
};
declare type VueProxy<PropsOptions, RawBindings, Data = DefaultData<vue__default>, Computed extends ComputedOptions = DefaultComputed, Methods extends MethodOptions = DefaultMethods<vue__default>, Mixin = {}, Extends = {}, Emits extends EmitsOptions = {}> = ComponentOptions<vue__default, ShallowUnwrapRef<RawBindings> & Data, Methods, Computed, PropsOptions, ExtractPropTypes<PropsOptions>> & VueConstructorProxy<PropsOptions, RawBindings, Data, Computed, Methods, Mixin, Extends, Emits>;

declare type ChartPropsOptions<TType extends ChartType> = {
    options: {
        type: PropType<ChartOptions<TType>>;
        required: false;
    };
    chartId: {
        default: string;
        type: StringConstructor;
    };
    width: {
        default: 400;
        type: NumberConstructor;
    };
    height: {
        default: 400;
        type: NumberConstructor;
    };
    cssClasses: {
        type: StringConstructor;
        default: string;
    };
    styles: {
        type: PropType<StyleValue>;
    };
    plugins: {
        type: PropType<Plugin[]>;
        default: () => any[];
    };
    chartData: {
        type: PropType<ChartData<TType>>;
        required: true;
    };
    onLabelsUpdate: {
        type: PropType<() => void>;
    };
    onChartUpdate: {
        type: PropType<(chartInstance: Chart<TType>) => void>;
    };
    onChartDestroy: {
        type: PropType<() => void>;
    };
    onChartRender: {
        type: PropType<(chartInstance: Chart<TType>) => void>;
    };
};

declare type ComponentData<T extends ChartType> = {
    canvasRef: Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: Chart<T> | null;
    canvasId: string;
};
declare const defineChartComponent: <TType extends keyof chart_js.ChartTypeRegistry = keyof chart_js.ChartTypeRegistry>(chartId: string, chartType: TType) => VueProxy<ChartPropsOptions<TType>, ComponentData<TType>, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;

declare type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;
declare type ExtractComponentProps<T> = T extends VueProxy<infer TProps, any, any, any, any, any, any, any> ? ExtractPropTypes<TProps> : never;
declare type ExtractComponentData<T> = T extends VueProxy<any, infer TData, any, any, any, any, any, any> ? TData : never;

declare type DumbTypescript = 0;
declare type ChartHookReturnType<TType extends ChartType> = {
    [K in DumbTypescript as `${TType}ChartRef`]: Ref<ExtractComponentData<VueProxy<any, ComponentData<TType>>>>;
} & {
    [K in DumbTypescript as `${TType}ChartProps`]: Ref<ExtractComponentProps<VueProxy<ChartPropsOptions<TType>, ComponentData<TType>>>>;
};
declare const useDoughnutChart: (params: {
    chartData: MaybeRef<ChartData<"doughnut", number[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"doughnut", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"doughnut", number[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"doughnut">;
declare const useBarChart: (params: {
    chartData: MaybeRef<ChartData<"bar", number[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"bar", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"bar", number[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"bar">;
declare const useLineChart: (params: {
    chartData: MaybeRef<ChartData<"line", (number | chart_js.ScatterDataPoint | null)[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"line", (number | chart_js.ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"line", (number | chart_js.ScatterDataPoint | null)[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"line">;
declare const usePieChart: (params: {
    chartData: MaybeRef<ChartData<"pie", number[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"pie", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"pie", number[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"pie">;
declare const usePolarAreaChart: (params: {
    chartData: MaybeRef<ChartData<"polarArea", number[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"polarArea", number[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"polarArea", number[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"polarArea">;
declare const useRadarChart: (params: {
    chartData: MaybeRef<ChartData<"radar", (number | null)[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"radar", (number | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"radar", (number | null)[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"radar">;
declare const useBubbleChart: (params: {
    chartData: MaybeRef<ChartData<"bubble", chart_js.BubbleDataPoint[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"bubble", chart_js.BubbleDataPoint[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"bubble", chart_js.BubbleDataPoint[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"bubble">;
declare const useScatterChart: (params: {
    chartData: MaybeRef<ChartData<"scatter", (number | chart_js.ScatterDataPoint | null)[], unknown>>;
    options?: MaybeRef<Record<string, any>> | undefined;
    width?: number | undefined;
    height?: number | undefined;
    cssClasses?: string | undefined;
    styles?: StyleValue | undefined;
    plugins?: Plugin<keyof chart_js.ChartTypeRegistry, chart_js_types_basic.AnyObject>[] | undefined;
    onLabelsUpdate?: (() => void) | undefined;
    onChartUpdate?: ((chartInstance: Chart<"scatter", (number | chart_js.ScatterDataPoint | null)[], unknown>) => void) | undefined;
    onChartDestroy?: (() => void) | undefined;
    onChartRender?: ((chartInstance: Chart<"scatter", (number | chart_js.ScatterDataPoint | null)[], unknown>) => void) | undefined;
}) => ChartHookReturnType<"scatter">;

declare const BarChart: VueProxy<ChartPropsOptions<"bar">, ComponentData<"bar">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
declare const DoughnutChart: VueProxy<ChartPropsOptions<"doughnut">, ComponentData<"doughnut">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
declare const LineChart: VueProxy<ChartPropsOptions<"line">, ComponentData<"line">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
declare const PieChart: VueProxy<ChartPropsOptions<"pie">, ComponentData<"pie">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
declare const PolarAreaChart: VueProxy<ChartPropsOptions<"polarArea">, ComponentData<"polarArea">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
declare const RadarChart: VueProxy<ChartPropsOptions<"radar">, ComponentData<"radar">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
declare const BubbleChart: VueProxy<ChartPropsOptions<"bubble">, ComponentData<"bubble">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
declare const ScatterChart: VueProxy<ChartPropsOptions<"scatter">, ComponentData<"scatter">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
declare const _default: {
    BarChart: VueProxy<ChartPropsOptions<"bar">, ComponentData<"bar">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
    DoughnutChart: VueProxy<ChartPropsOptions<"doughnut">, ComponentData<"doughnut">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
    LineChart: VueProxy<ChartPropsOptions<"line">, ComponentData<"line">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
    PieChart: VueProxy<ChartPropsOptions<"pie">, ComponentData<"pie">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
    PolarAreaChart: VueProxy<ChartPropsOptions<"polarArea">, ComponentData<"polarArea">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
    RadarChart: VueProxy<ChartPropsOptions<"radar">, ComponentData<"radar">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
    BubbleChart: VueProxy<ChartPropsOptions<"bubble">, ComponentData<"bubble">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
    ScatterChart: VueProxy<ChartPropsOptions<"scatter">, ComponentData<"scatter">, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
    defineChartComponent: <TType extends keyof chart_js.ChartTypeRegistry = keyof chart_js.ChartTypeRegistry>(chartId: string, chartType: TType) => VueProxy<ChartPropsOptions<TType>, ComponentData<TType>, vue_types_options.DefaultData<vue.default>, vue_types_options.DefaultComputed, vue_types_options.DefaultMethods<vue.default>, {}, {}, {}>;
};

export { BarChart, BubbleChart, DoughnutChart, ExtractComponentData, ExtractComponentProps, LineChart, PieChart, PolarAreaChart, RadarChart, ScatterChart, _default as default, defineChartComponent, useBarChart, useBubbleChart, useDoughnutChart, useLineChart, usePieChart, usePolarAreaChart, useRadarChart, useScatterChart };
