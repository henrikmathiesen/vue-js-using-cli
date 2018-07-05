import Vue from 'vue';
import App from './App.vue';

import router from './router';
import PositionTooDirective from './directives/position-too-directive';
import PositionDirective from './directives/position-directive';

Vue.config.productionTip = false;
Vue.directive('position', PositionDirective);
Vue.directive('position-too', PositionTooDirective);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
