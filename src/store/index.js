import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList'
import other from './modules/other'

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    orderList: orderList,
    other: other
  }
})
