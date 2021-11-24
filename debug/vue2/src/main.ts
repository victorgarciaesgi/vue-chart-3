import Vue from 'vue';
import App from './App.vue';
import { Chart, registerables } from 'chart.js';
import VComp from '@vue/composition-api';

Chart.register(...registerables);
Vue.use(VComp);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
