window.timeSolver = require('timesolver/timeSolver.min.js');

import Vue from 'vue'
import App from './App'
import router from './router'
import VTooltip from 'v-tooltip'
import VueLoading from 'vuejs-loading-plugin'
import Notifications from 'vue-notification'
import VueLazyload from "vue-lazyload";
import VModal from 'vue-js-modal'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/img/error.png',
  loading: '/static/img/loading.gif',
  attempt: 5,
  lazyComponent: true
})


Vue.use(VModal)
Vue.use(Notifications)
Vue.use(VTooltip)
Vue.use(VueLoading, {

  text: 'HUTPLACES',
  background: 'rgba(0,0,0,0.97)',
  classes: ['hutplace-preloader'] // array, object or string
})

Vue.config.productionTip = false

// eslint-disable-next-line no-new
const app = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    app.$loading(true)
  }
  next()
})

router.afterEach((to, from) => {
  setTimeout(function () {
    app.$loading(false)
  }, 500)
})
