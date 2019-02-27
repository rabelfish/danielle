// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import './stylus/main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#4e30b6',
    secondary: '#30B691',
    background: '#f4f4f6',
    text: '#363242'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
