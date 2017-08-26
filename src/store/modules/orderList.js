/**
 * Created by admin on 2017/6/28.
 */
import Vue from 'vue'

export default {
  state: {
    orderList: ['orderlist', '2'],
    param: {}
  },
  getters: {
    getOrderList2(state) {
      return state.orderList
    }
  },
  actions: {
    fetchOrderList({commit, state}) {
      Vue.http.get('api/getOrderList', state.param)
        .then((res) => {
          commit('changeOrderList', res.data.list)
        })
    }
  },
  mutations: {
    changeOrderList(state, list) {
      console.log('changeOrderList', list);
      state.orderList = list
    },
    updataParams(state, {key, val}) {
      console.log('更新了', {key, val});
      state.param[key] = val
    }
  }
}
