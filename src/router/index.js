import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import ModalsView from '../pages/ModalsView.vue'
import Posts from '../pages/Posts.vue'
import PostDetail from '../pages/PostDetail.vue'

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
    component: Posts
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: PostDetail
  },
  {
    path: '/modals',
    name: 'modals',
    component: ModalsView
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

