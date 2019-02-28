import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Music from '@/components/pages/Music'
import Experience from '@/components/pages/Experience'
import Contact from '@/components/pages/Contact'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Danielle Fisher'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'Danielle Fisher'
      }
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
      meta: {
        title: 'Danielle Fisher'
      }
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
      meta: {
        title: 'Danielle Fisher'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Danielle Fisher'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
