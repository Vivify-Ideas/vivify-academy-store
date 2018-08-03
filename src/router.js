import Vue from 'vue'
import Router from 'vue-router'
import Customers from './views/AppCustomers.vue'
import LatestPurchases from './views/AppLatestPurchases.vue'
import Products from './views/AppProducts.vue'
import PurchaseProduct from './views/AppPurchaseProduct.vue'

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
      path: '/customers/:id',
      name: 'latest-purchases',
      component: LatestPurchases,
      props: true
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/:id',
      name: 'purchase-product',
      component: PurchaseProduct,
      props: true
    }
  ]
})
