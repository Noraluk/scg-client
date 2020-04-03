import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import vuetify from './plugins/vuetify'
import { store } from './store'

import Home from './components/Home.vue'
import XYZ from './components/XYZ.vue'
import BC from './components/BC.vue'
import LineBot from './components/LineBot.vue'
import CV from './components/CV.vue'


Vue.use(VueRouter)


const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "XYZ",
    path: "/xyz",
    component: XYZ,
  },
  {
    name: "BC",
    path: "/bc",
    component: BC,
  },
  {
    name: "LineBot",
    path: "/line-bot",
    component: LineBot,
  },
  {
    name: "CV",
    path: "/cv",
    component: CV,
  },
]

const router = new VueRouter({ mode: "history", routes: routes })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store
}).$mount('#app')
