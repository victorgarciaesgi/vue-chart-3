import { defineNuxtPlugin } from 'nuxt3';

import ChartJs from 'chart.js';
const { Chart, registerables } = ChartJs;

export default defineNuxtPlugin(() => {
  Chart.register(...registerables);
});
