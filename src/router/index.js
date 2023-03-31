import { createRouter, createWebHistory } from 'vue-router'
import shipmentab from '../screen/shipmentab.vue'
import  addressBook from '../screen/address_book.vue'
import Login from '../screen/log-in.vue'
import getQuote from '../screen/get-quote.vue'
import manifest from '../screen/manifest-history.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/shipmentTab',
      name: 'shipmentab',
      component: shipmentab
    },
    {
      path: '/address_book',
      name: 'address_book',
      component: addressBook
    },
    {
      path: '/get-quote',
      name: 'get_quote',
      component:getQuote 
    },
    {
      path: '/manifest-history',
      name: 'manifest-history',
      component:manifest 
    },
  
  ]
})

export default router
