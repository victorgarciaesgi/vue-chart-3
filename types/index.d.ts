export { defineChartComponent } from './components';
export declare const Bar: import("./vueproxy.types").VueProxy<{
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bar", number[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const Doughnut: import("./vueproxy.types").VueProxy<{
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"doughnut", number[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const LineChart: import("./vueproxy.types").VueProxy<{
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const Pie: import("./vueproxy.types").VueProxy<{
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"pie", number[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const PolarArea: import("./vueproxy.types").VueProxy<{
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"polarArea", number[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const Radar: import("./vueproxy.types").VueProxy<{
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"radar", (number | null)[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const Bubble: import("./vueproxy.types").VueProxy<{
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
export declare const Scatter: import("./vueproxy.types").VueProxy<{
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
        readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
    };
    readonly plugins: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
        readonly default: () => never[];
    };
    readonly data: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
        readonly required: true;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>>;
    };
}, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
    canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
} & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
declare const _default: {
    Bar: import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bar", number[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bar"> & import("chart.js").ElementChartOptions<"bar"> & import("chart.js").PluginChartOptions<"bar"> & import("chart.js").DatasetChartOptions<"bar"> & import("chart.js").ScaleChartOptions<"bar"> & import("chart.js").BarControllerChartOptions>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    Doughnut: import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"doughnut", number[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"doughnut"> & import("chart.js").ElementChartOptions<"doughnut"> & import("chart.js").PluginChartOptions<"doughnut"> & import("chart.js").DatasetChartOptions<"doughnut"> & import("chart.js").ScaleChartOptions<"doughnut"> & import("chart.js").DoughnutControllerChartOptions>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    LineChart: import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"line", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"line"> & import("chart.js").ElementChartOptions<"line"> & import("chart.js").PluginChartOptions<"line"> & import("chart.js").DatasetChartOptions<"line"> & import("chart.js").ScaleChartOptions<"line"> & import("chart.js").LineControllerChartOptions>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    Pie: import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"pie", number[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"pie"> & import("chart.js").ElementChartOptions<"pie"> & import("chart.js").PluginChartOptions<"pie"> & import("chart.js").DatasetChartOptions<"pie"> & import("chart.js").ScaleChartOptions<"pie"> & import("chart.js").DoughnutControllerChartOptions>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    PolarArea: import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"polarArea", number[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"polarArea"> & import("chart.js").ElementChartOptions<"polarArea"> & import("chart.js").PluginChartOptions<"polarArea"> & import("chart.js").DatasetChartOptions<"polarArea"> & import("chart.js").ScaleChartOptions<"polarArea"> & import("chart.js").PolarAreaControllerChartOptions>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    Radar: import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"radar", (number | null)[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"radar"> & import("chart.js").ElementChartOptions<"radar"> & import("chart.js").PluginChartOptions<"radar"> & import("chart.js").DatasetChartOptions<"radar"> & import("chart.js").ScaleChartOptions<"radar"> & import("chart.js").LineControllerChartOptions>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    Bubble: import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"bubble", import("chart.js").BubbleDataPoint[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"bubble"> & import("chart.js").ElementChartOptions<"bubble"> & import("chart.js").PluginChartOptions<"bubble"> & import("chart.js").DatasetChartOptions<"bubble"> & import("chart.js").ScaleChartOptions<"bubble">>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    Scatter: import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<"scatter", (number | import("chart.js").ScatterDataPoint | null)[], unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<"scatter"> & import("chart.js").ElementChartOptions<"scatter"> & import("chart.js").PluginChartOptions<"scatter"> & import("chart.js").DatasetChartOptions<"scatter"> & import("chart.js").ScaleChartOptions<"scatter"> & import("chart.js").LineControllerChartOptions>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
    defineChartComponent: <TType extends keyof import("chart.js").ChartTypeRegistry = keyof import("chart.js").ChartTypeRegistry>(chartId: string, chartType: TType) => import("./vueproxy.types").VueProxy<{
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
            readonly type: import("@vue/composition-api").PropType<import("./components").StyleValue>;
        };
        readonly plugins: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").Plugin<keyof import("chart.js").ChartTypeRegistry, import("chart.js/types/basic").AnyObject>[]>;
            readonly default: () => never[];
        };
        readonly data: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js").ChartData<TType, import("chart.js/types/utils").DistributiveArray<import("chart.js").ChartTypeRegistry[TType]["defaultDataPoint"]>, unknown>>;
            readonly required: true;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<import("chart.js/types/utils").DeepPartial<import("chart.js").CoreChartOptions<TType> & import("chart.js").ElementChartOptions<TType> & import("chart.js").PluginChartOptions<TType> & import("chart.js").DatasetChartOptions<TType> & import("chart.js").ScaleChartOptions<TType> & import("chart.js").ChartTypeRegistry[TType]["chartOptions"]>>;
        };
    }, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, {
        canvasRef: import("@vue/composition-api").Ref<HTMLCanvasElement>;
    } & import("vue/types/options").DefaultData<import("vue/types/umd")>, import("vue/types/options").DefaultComputed, import("vue/types/options").DefaultMethods<import("vue/types/umd")>>;
};
export default _default;
