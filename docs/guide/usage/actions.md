# Programmatic Event Triggers

Charts.js Programmatic events are a way to call plugin actions.
([Programmatic Event Triggers](Programmatic Event Triggers))

In `vue-chart-3`, it works the same way by accessing the `chartInstance` in the template ref.

Example with a plugin like [chartjs-plugin-zoom](https://www.chartjs.org/chartjs-plugin-zoom/)

```ts
barChartRef.value.chartInstance.resetZoom();
```

Example in [Vue 2 demo](https://vue-chart-3.netlify.app)
