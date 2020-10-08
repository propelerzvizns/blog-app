import Vue from 'vue'
import VueRouter from 'vue-router'
import AppPosts from '../components/AppPosts.vue'
import SinglePost from '../components/SinglePost.vue'
import AddPost from '../components/AddPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    name: 'posts',
    component: AppPosts
  },
  {
    path: '/post/:id',
    name: 'post',
    component: SinglePost
  },
  {
    path: '/add',
    name: 'add-post',
    component: AddPost
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
