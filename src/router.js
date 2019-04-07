import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)
import Home from './pages/home/home.vue'
import Order from './pages/order/order.vue'
import City from './pages/city/city.vue'
import Search from './pages/search/search.vue'
import Results from './pages/search/children/results.vue'
import Details from './pages/details/details.vue'
import User from './pages/user/user.vue'
import Editpwd from './pages/user/children/editpwd.vue'
import Login from './pages/login/login.vue'
import Channel from './pages/channel/channel.vue'
import Cancel from './pages/order/children/cancel.vue'
import Visas from './pages/visas/visas.vue'
import MyOrders from './pages/myorders/myorders.vue'
import Shop from './pages/shop/shop.vue'
import Coupon from './pages/coupon/coupon.vue'
import Passenger from './pages/passenger/passenger.vue'
import Address from './pages/address/address.vue'
import Book from './pages/book/book.vue'
import Index from './pages/book/children/index.vue'
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: () => import( './pages/home/home.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/order/cancel',
      name: 'cancel',
      component: Cancel
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/search/results',
      name: 'results',
      component: Results
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/details/batches',
      name: 'batches',
      component: () => import( './pages/batches/batches.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/user/editpwd',
      name: 'editpwd',
      component: Editpwd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cn',
      name: 'cn',
      component: Channel
    },
    {
      path: '/out',
      name: 'out',
      component: Channel
    },
    {
      path: '/around',
      name: 'around',
      component: Channel
    },
    {
      path: '/wanle',
      name: 'wanle',
      component: Channel
    },
    {
      path: '/sport',
      name: 'sport',
      component: Channel
    },
    {
      path: '/photo',
      name: 'photo',
      component: Channel
    },
    {
      path: '/qinzi',
      name: 'qinzi',
      component: Channel
    },
    {
      path: '/huwai',
      name: 'huwai',
      component: Channel
    },
    {
      path: '/zty',
      name: 'zty',
      component: Channel
    },
    {
      path: '/dingzhi',
      name: 'dingzhi',
      component: Channel
    },
    {
      path: '/visas',
      name: 'visas',
      component: Visas
    },
    {
      path: '/myorders',
      name: 'myorders',
      component: MyOrders
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: Coupon
    },
    {
      path: '/passenger',
      name: 'passenger',
      component: Passenger
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/book/index',
      name: 'index',
      component: Index
    },
  ]
})
