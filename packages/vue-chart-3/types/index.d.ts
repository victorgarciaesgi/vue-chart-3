export { defineChartComponent } from './components';
export { ExtractComponentData, ExtractComponentProps } from './utils';
export declare const BarChart: import("./vueproxy.types").VueProxy<{
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bar", number[], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: import("chart.js").Chart<"bar", number[], unknown> | null;
}, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const DoughnutChart: import("./vueproxy.types").VueProxy<{
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"doughnut", number[], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: import("chart.js").Chart<"doughnut", number[], unknown> | null;
}, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const LineChart: import("./vueproxy.types").VueProxy<{
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown> | null;
}, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const PieChart: import("./vueproxy.types").VueProxy<{
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"pie", number[], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: import("chart.js").Chart<"pie", number[], unknown> | null;
}, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const PolarAreaChart: import("./vueproxy.types").VueProxy<{
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"polarArea", number[], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: import("chart.js").Chart<"polarArea", number[], unknown> | null;
}, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const RadarChart: import("./vueproxy.types").VueProxy<{
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"radar", (number | null)[], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown> | null;
}, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const BubbleChart: import("./vueproxy.types").VueProxy<{
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown> | null;
}, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const ScatterChart: import("./vueproxy.types").VueProxy<{
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>>;
        readonly required: false;
    };
    readonly chartId: {
        readonly default: string;
        readonly type: StringConstructor;
    };
    readonly width: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly height: {
        readonly default: 400;
        readonly type: NumberConstructor;
    };
    readonly cssClasses: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly styles: {
        readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly chartData: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
        readonly required: true;
    };
    readonly onLabelsUpdate: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartUpdate: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
    };
    readonly onChartDestroy: {
        readonly type: import("@vue/composition-api").PropType<() => void>;
    };
    readonly onChartRender: {
        readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
    renderChart: () => void;
    chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown> | null;
}, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
declare const _default: {
    BarChart: import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bar", number[], unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bar", number[], unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<"bar", number[], unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    DoughnutChart: import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"doughnut", number[], unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"doughnut", number[], unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<"doughnut", number[], unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    LineChart: import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    PieChart: import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"pie", number[], unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"pie", number[], unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<"pie", number[], unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    PolarAreaChart: import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"polarArea", number[], unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"polarArea", number[], unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<"polarArea", number[], unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    RadarChart: import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"radar", (number | null)[], unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<"radar", (number | null)[], unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    BubbleChart: import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<"bubble", import("chart.js").BubbleDataPoint[], unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    ScatterChart: import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => import("./vueproxy.types").VueProxy<{
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
            readonly required: false;
        };
        readonly chartId: {
            readonly default: string;
            readonly type: StringConstructor;
        };
        readonly width: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly height: {
            readonly default: 400;
            readonly type: NumberConstructor;
        };
        readonly cssClasses: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly styles: {
            readonly type: import("@vue/composition-api").PropType<import("./vueproxy.types").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly chartData: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
            readonly required: true;
        };
        readonly onLabelsUpdate: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartUpdate: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
        };
        readonly onChartDestroy: {
            readonly type: import("@vue/composition-api").PropType<() => void>;
        };
        readonly onChartRender: {
            readonly type: import("@vue/composition-api").PropType<(chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>) => void>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement | undefined>;
        renderChart: () => void;
        chartInstance: import("chart.js").Chart<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown> | null;
    }, import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
};
export default _default;
