import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/1.vue'),
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/1.vue'),
      contenta: () => import(/* webpackChunkName: "about" */ '../views/2.vue')
    }
  },
  {
    path: '/test1',
    name: 'test1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      contenta: () => import(/* webpackChunkName: "about" */ '../views/2.vue')
    }
  },
  {
    path: '/test2',
    name: 'test2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/1.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
