# Components information

## List of all components

- BarChart
- DoughnutChart
- LineChart
- PieChart
- PolarAreaChart
- RadarChart
- BubbleChart
- ScatterChart

## All components props

| Prop             | Type                           | Default |
| ---------------- | ------------------------------ | ------- |
| 'chartData'      | ChartJs.ChartData              |
| 'options'        | ChartJs.ChartOptions           |
| 'plugins'        | ChartJs.Plugin[]               |
| 'cssClasses'     | string                         |
| 'width'          | number                         | 400     |
| 'height'         | number                         | 400     |
| 'onChartRender'  | (chartInstance: Chart) => void |
| 'onChartUpdate'  | (chartInstance: Chart) => void |
| 'onChartDestroy' | () => void                     |
| 'onLabelsUpdate' | () => void                     |

## Data accessible by reference

| Prop            | Type              |
| --------------- | ----------------- |
| 'chartInstance' | Chart             |
| 'canvasRef'     | HtmlCanvasElement |
| 'renderChart'   | () => void        |

## Events emitted by all components

| Event           | Payload              |
| --------------- | -------------------- |
| 'chart:render'  | chartInstance: Chart |
| 'chart:update'  | chartInstance: Chart |
| 'chart:destroy' | -                    |
| 'labels:update' | -                    |
