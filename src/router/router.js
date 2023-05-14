import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '../components/HelloWorld.vue'
import ListUsers from '../components/ListUsers.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/users', component: ListUsers },
  { path: '/', component: Default },
]

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router