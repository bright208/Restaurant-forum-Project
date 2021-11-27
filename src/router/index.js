import Vue from 'vue'
import VueRouter from 'vue-router'//載入套件
import notfound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)//使用套件

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import('../views/SignUp.vue')//動態載入
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: Restaurants
  },
  {
    path: "/restaurants/feeds",
    name: "restaurants-feeds",
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: "/restaurants/top",
    name: "restaurants-tops",
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant-show',
    component: () => import('../views/RestaurantShow.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: "/users/top",
    name: "users-top",
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: "/users/:id",
    name: "profile-page",
    component: () => import('../views/User.vue')
  },
  {
    path: "/users/:id/edit",
    name: "profile-page-edit",
    component: () => import('../views/UserEdit.vue')
  },
  {
    path: "/admin/restaurants",
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue')
  },
  {
    path: "/admin/restaurants/new",
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue')
  },
  {
    path: "/admin/restaurants/:id",
    name: 'admin-restaurants-show',
    component: () => import('../views/AdminRestaurantShow.vue')
  },
  {
    path: "/admin/restaurants/:id/edit",
    name: 'admin-restaurants-edit',
    component: () => import('../views/AdminRestaurantEdit.vue')
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '*',
    name: 'notfound404',
    component: notfound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes                  //初始化
})

export default router
