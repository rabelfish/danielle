<template>
  <div id="header">
    <v-layout row wrap>
      <v-flex xs6 class="text-xs-left">
        <div id="name" class="primary--text font-weight-thin display-1" style="padding:10px;">Danielle Fisher</div>
      </v-flex>
      <v-flex xs6>
        <div class="text-xs-center">
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
        </div>
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
    margin:0 5px 5px 5px;
    border-bottom: 1px solid lightgray;
  }

  #name {
    font-weight: 50;
  }
</style>
