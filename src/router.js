import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Average from './views/Average.vue'
import FinancialPlan from './views/FinancialPlan.vue'
import SvgPage from './views/SvgPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/average',
      name: 'average',
      component: Average
    },
    {
      path: '/plan',
      name: 'FinancialPlan',
      component: FinancialPlan
    },
    {
      path: '/svg',
      name: 'SvgPage',
      component: SvgPage
    }
  ]
})
