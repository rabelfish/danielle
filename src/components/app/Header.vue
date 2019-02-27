<template>
  <div id="header">
    <v-layout row wrap>
      <v-flex xs6 class="text-xs-left">
        <div class="primary--text display-1" style="padding:10px;">Danielle Fisher</div>
      </v-flex>
      <v-flex xs6>
        <v-tabs
          v-model="active"
          slider-color="secondary"
        >
          <router-link
            tag="v-tab"
            :to="tab.link"
            v-for="tab in tabs"
            :key="tab.name"
            ripple
          >
            {{ tab.name }}
          </router-link>
        </v-tabs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: null,
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
        name: 'Contact',
        link: 'contact'
      }]
    }
  }
}
</script>

<style>
  #header {
    width: 100%;
    position: fixed;
    background-color: #fff;
    height: 60px;
    padding-top:5px;
  }
</style>
