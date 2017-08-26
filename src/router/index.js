import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../pages/index.vue'
import detailPage from '../pages/detail.vue'
import DetailAnaPage from '../pages/detail/analysis'
import DetailCouPage from '../pages/detail/count'
import DetailForPage from '../pages/detail/forecast'
import DetailPubPage from '../pages/detail/publish'
import OrderListPage from '../pages/orderList'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'forecast',
          component: DetailForPage
        }, {
          path: 'analysis',
          component: DetailAnaPage
        }, {
          path: 'count',
          component: DetailCouPage
        }, {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    },
    {
      path: '/orderList',
      component: OrderListPage
    }
  ]
})
