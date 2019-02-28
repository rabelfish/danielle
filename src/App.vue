<template>
  <div id="app">
  <v-app>
    <app-header @toggle="drawer=!drawer"></app-header>
    <v-container id="main-conatiner" fluid grid-list-md>
      <router-view/>
    </v-container>

    <div v-if="isMobile()">
      <v-navigation-drawer
        v-model="drawer"
        right
        fixed
        temporary
        id="nav-drawer"
      >
        <v-list class="pa-1" dense>

          <v-list-tile
            v-for="tab in tabs"
            :key="tab.name"
          >
            <v-list-tile-content>
             <router-link
              tag="v-tab"
              :to="tab.link"
              :key="tab.name"
              ripple
            >
              {{ tab.name }}
            </router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </div>

    <app-footer></app-footer>
  </v-app>
  </div>
</template>

<script>
import Header from './components/app/Header.vue'
import Footer from './components/app/Footer.vue'

export default {
  data () {
    return {
      drawer: null,
      tabs: [{
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: 'about'
      },
      {
        name: 'Music',
        link: 'music'
      },
      {
        name: 'Experience',
        link: 'experience'
      },
      {
        name: 'Contact',
        link: 'contact'
      }]
    }
  },
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  methods: {
    isMobile () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #363242;
    overflow-x: hidden;
  }

  #main-conatiner {
    padding-top: 70px;
  }

  #nav-drawer {
    padding-top: 70px;
  }

</style>
