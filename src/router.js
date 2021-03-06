import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true
    }
  ]
})
