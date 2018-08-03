import Vue from 'vue'
import Router from 'vue-router'
import Customers from './views/AppCustomers.vue'
import Products from './views/AppProducts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'customers'
    },
    {
      path: '/customers',
      name: 'customers',
      component: Customers
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})
