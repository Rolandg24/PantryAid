import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue' // Make sure this exists!

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/api/hello', component: App }, // Test Route
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
