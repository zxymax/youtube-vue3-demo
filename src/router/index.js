import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../pages/Post.vue')
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: () => import('../pages/PostDetail.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

