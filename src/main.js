// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify, {
  VImg
} from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import './stylus/main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#432854',
    secondary: '#983bd6',
    background: '#f4f4f6',
    text: '#363242'
  },
  iconfont: 'md'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    VImg
  },
  template: '<App/>'
})
