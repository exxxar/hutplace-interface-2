import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/Start'
import Lang from 'vuejs-localization'

Lang.requireAll(require.context('../lang', true, /\.js$/))

Vue.use(Router)
Vue.use(Lang)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
      meta: {
        layout: 'start'
      }
    }
  ]
})
