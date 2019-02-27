<template>
  <div id="app">
  <v-app>
    <app-header></app-header>
    <v-container id="main-conatiner" fluid grid-list-md>
      <router-view/>
    </v-container>
    <app-footer></app-footer>
  </v-app>
  </div>
</template>

<script>
import Header from './components/app/Header.vue'
import Footer from './components/app/Footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: #f4f4f6;
    color: #363242;
  }

  #main-conatiner {
    padding-top: 60px;
  }

</style>
