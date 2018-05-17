import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

window.dataLayer = window.dataLayer || []
function gtag () {
  window.dataLayer.push(arguments)
}
router.beforeEach((to, from, next) => {
  gtag('config', 'UA-65053410-2', {'page_path': to.path})
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
