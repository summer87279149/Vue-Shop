/**
 * Created by admin on 2017/6/28.
 */
import Vue from 'vue'

export default {
  state: {
    param2: ['other', 'other']
  },
  getters: {
    getOrderList(state) {
      return state.param2
    }
  },
  actions: {
    fetc2hOrderList({commit, state}) {
      Vue.http.get('api/getOrderList', state.param).then(
        (res) => {
          commit('changeOrderList', res.data.list)
        }
      )
    }
  },
  mutations: {
    changeOrderList(state, list) {
      state.orderList = list
    }
  }
}
