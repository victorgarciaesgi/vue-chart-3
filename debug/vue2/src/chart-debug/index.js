/* eslint-disable */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
    : (obj[key] = value);
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, '__esModule', { value: true });
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if ((module2 && typeof module2 === 'object') || typeof module2 === 'function') {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== 'default'))
        __defProp(target, key, {
          get: () => module2[key],
          enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable,
        });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(
    __markAsModule(
      __defProp(
        module2 != null ? __create(__getProtoOf(module2)) : {},
        'default',
        !isNodeMode && module2 && module2.__esModule
          ? { get: () => module2.default, enumerable: true }
          : { value: module2, enumerable: true }
      )
    ),
    module2
  );
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return (
      (cache && cache.get(module2)) ||
      ((temp = __reExport(__markAsModule({}), module2, 1)), cache && cache.set(module2, temp), temp)
    );
  };
})(typeof WeakMap !== 'undefined' ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BarChart: () => BarChart,
  BubbleChart: () => BubbleChart,
  DoughnutChart: () => DoughnutChart,
  LineChart: () => LineChart,
  PieChart: () => PieChart,
  PolarAreaChart: () => PolarAreaChart,
  RadarChart: () => RadarChart,
  ScatterChart: () => ScatterChart,
  default: () => src_default,
  defineChartComponent: () => defineChartComponent,
  useBarChart: () => useBarChart,
  useBubbleChart: () => useBubbleChart,
  useDoughnutChart: () => useDoughnutChart,
  useLineChart: () => useLineChart,
  usePieChart: () => usePieChart,
  usePolarAreaChart: () => usePolarAreaChart,
  useRadarChart: () => useRadarChart,
  useScatterChart: () => useScatterChart,
});

// src/components.ts
var import_chart = require('chart.js');
var import_composition_api = require('@vue/composition-api');
var import_startCase = __toESM(require('lodash-es/startCase.js'));
var import_camelCase = __toESM(require('lodash-es/camelCase.js'));
var import_cloneDeep = __toESM(require('lodash-es/cloneDeep.js'));
var import_isEqual = __toESM(require('lodash-es/isEqual.js'));
var import_isEmpty = __toESM(require('lodash-es/isEmpty.js'));
var import_nanoid = require('nanoid');
var pascalCase = (str) =>
  (0, import_startCase.default)((0, import_camelCase.default)(str)).replace(/ /g, '');
var defineChartComponent = (chartId, chartType) => {
  const propsDefs = {
    options: { type: Object, required: false },
    chartId: { default: chartId, type: String },
    width: { default: 400, type: Number },
    height: { default: 400, type: Number },
    cssClasses: { type: String, default: '' },
    styles: { type: Object },
    plugins: { type: Array, default: () => [] },
    chartData: { type: Object, required: true },
    onLabelsUpdate: { type: Function },
    onChartUpdate: { type: Function },
    onChartDestroy: { type: Function },
    onChartRender: { type: Function },
  };
  const componentName = pascalCase(chartId);
  return (0, import_composition_api.defineComponent)({
    name: componentName,
    props: propsDefs,
    emits: {
      'labels:update': () => true,
      'chart:update': (chartInstance) => true,
      'chart:destroy': () => true,
      'chart:render': (chartInstance) => true,
    },
    setup(props, { emit }) {
      const canvasRef = (0, import_composition_api.ref)();
      const canvasId = `${chartId}-${(0, import_nanoid.nanoid)(6)}`;
      let chartInstance = (0, import_composition_api.shallowRef)(null);
      (0, import_composition_api.watch)(() => props.chartData, watchHandler, { deep: true });
      (0, import_composition_api.watch)(
        () => props.options,
        (newOptions) => {
          if (chartInstance.value && newOptions) {
            chartInstance.value.options = (0, import_cloneDeep.default)(newOptions);
            handleChartUpdate();
          }
        },
        { deep: true }
      );
      function watchHandler(newData) {
        if (chartInstance.value) {
          let chart = chartInstance.value;
          if (!(0, import_isEqual.default)(newData.labels, chartInstance.value.data.labels)) {
            chart.data.labels = newData.labels;
            handleLabelsUpdate();
          }
          if (!(0, import_isEqual.default)(newData.datasets, chartInstance.value.data.datasets)) {
            newData.datasets.forEach((dataset, index) => {
              var _a, _b;
              if (!(0, import_isEmpty.default)(dataset)) {
                const oldData = (0, import_cloneDeep.default)(chart.data);
                const oldDatasetKeys = Object.keys(
                  (_b = (_a = oldData.datasets) == null ? void 0 : _a[index]) != null ? _b : {}
                );
                const newDatasetKeys = Object.keys(dataset);
                const deletionKeys = oldDatasetKeys.filter((key) => {
                  return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
                });
                deletionKeys.forEach((deletionKey) => {
                  if (chart.data.datasets[index]) {
                    delete chart.data.datasets[index][deletionKey];
                  }
                });
                for (const attribute in dataset) {
                  const attrValue = (0, import_cloneDeep.default)(dataset[attribute]);
                  let datasetItem = chart.data.datasets[index];
                  if (!datasetItem) {
                    chart.data.datasets[index] = {};
                  }
                  if (dataset.hasOwnProperty(attribute) && attrValue != null && chart) {
                    chart.data.datasets[index][attribute] = attrValue;
                  }
                }
              } else {
                chart.data.datasets = [];
              }
            });
          }
          handleChartUpdate();
        } else {
          if (chartInstance.value) {
            handleChartDestroy();
          }
          renderChart();
        }
      }
      function renderChart() {
        if (canvasRef.value) {
          chartInstance.value = new import_chart.Chart(canvasRef.value, {
            data: props.chartData,
            type: chartType,
            options: (0, import_cloneDeep.default)(props.options),
            plugins: props.plugins,
          });
          handleChartRender();
        } else {
          console.error(
            `Error on component ${componentName}, canvas cannot be rendered. Check if the render appends server-side`
          );
        }
      }
      function handleLabelsUpdate() {
        var _a;
        emit('labels:update');
        (_a = props.onLabelsUpdate) == null ? void 0 : _a.call(props);
      }
      function handleChartRender() {
        var _a;
        if (chartInstance.value) {
          emit('chart:render', chartInstance.value);
          (_a = props.onChartRender) == null ? void 0 : _a.call(props, chartInstance.value);
        }
      }
      function handleChartUpdate() {
        var _a;
        if (chartInstance.value) {
          chartInstance.value.update();
          emit('chart:render', chartInstance.value);
          (_a = props.onChartRender) == null ? void 0 : _a.call(props, chartInstance.value);
        }
      }
      function handleChartDestroy() {
        var _a, _b;
        (_a = chartInstance.value) == null ? void 0 : _a.destroy();
        emit('chart:destroy');
        (_b = props.onChartDestroy) == null ? void 0 : _b.call(props);
      }
      (0, import_composition_api.onMounted)(renderChart);
      (0, import_composition_api.onBeforeUnmount)(() => {
        var _a;
        if (chartInstance.value) {
          (_a = chartInstance.value) == null ? void 0 : _a.destroy();
        }
      });
      return { canvasRef, renderChart, chartInstance, canvasId };
    },
    render() {
      return (0, import_composition_api.h)(
        'div',
        {
          style: __spreadProps(
            __spreadValues(
              {
                maxWidth: '100%',
              },
              this.styles
            ),
            {
              position: 'relative',
            }
          ),
          class: this.cssClasses,
        },
        [
          (0, import_composition_api.h)('canvas', {
            style: {
              maxWidth: '100%',
              maxHeight: '100%',
            },
            attrs: {
              id: this.canvasId,
              width: this.width,
              height: this.height,
            },
            ref: 'canvasRef',
          }),
        ]
      );
    },
  });
};

// src/hooks.ts
var import_composition_api2 = require('@vue/composition-api');
var defineChartHook = (chartType) => {
  return (params) => {
    const reactiveProps = (0, import_composition_api2.computed)(() =>
      __spreadProps(__spreadValues({}, params), {
        ref: `${chartType}ChartRef`,
        chartData: (0, import_composition_api2.unref)(params.chartData),
        options: (0, import_composition_api2.unref)(params.options),
      })
    );
    return {
      [`${chartType}ChartProps`]: reactiveProps,
      [`${chartType}ChartRef`]: (0, import_composition_api2.ref)(null),
    };
  };
};
var useDoughnutChart = defineChartHook('doughnut');
var useBarChart = defineChartHook('bar');
var useLineChart = defineChartHook('line');
var usePieChart = defineChartHook('pie');
var usePolarAreaChart = defineChartHook('polarArea');
var useRadarChart = defineChartHook('radar');
var useBubbleChart = defineChartHook('bubble');
var useScatterChart = defineChartHook('scatter');

// src/index.ts
var BarChart = defineChartComponent('bar-chart', 'bar');
var DoughnutChart = defineChartComponent('doughnut-chart', 'doughnut');
var LineChart = defineChartComponent('line-chart', 'line');
var PieChart = defineChartComponent('pie-chart', 'pie');
var PolarAreaChart = defineChartComponent('polar-chart', 'polarArea');
var RadarChart = defineChartComponent('radar-chart', 'radar');
var BubbleChart = defineChartComponent('bubble-chart', 'bubble');
var ScatterChart = defineChartComponent('scatter-chart', 'scatter');
var src_default = {
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
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    BarChart,
    BubbleChart,
    DoughnutChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    ScatterChart,
    defineChartComponent,
    useBarChart,
    useBubbleChart,
    useDoughnutChart,
    useLineChart,
    usePieChart,
    usePolarAreaChart,
    useRadarChart,
    useScatterChart,
  });
