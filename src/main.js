// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout.vue'
import router from './router'
import VueReource from 'vue-resource'
import Store from './store/index'

Vue.config.productionTip = false;
Vue.use(VueReource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: Store,
  template: '<layout/>',
  components: {layout}
});




