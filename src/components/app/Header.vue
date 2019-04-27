<template>
  <div id="header">
    <v-layout row wrap>
      <v-flex xs8 sm6 class="text-xs-left">
        <div id="name" class="primary--text font-weight-thin display-1" style="padding:10px;">Danielle Fisher</div>
      </v-flex>
      <v-flex xs4 sm6>
        <div v-if="!isMobile()" class="text-xs-center">
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
         <div v-if="isMobile()">
            <i id="toggle" @click.stop="onToggle()" class="material-icons md-48">menu</i>
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
        name: 'Experience',
        link: 'experience'
      },
      {
        name: 'Contact',
        link: 'contact'
      }]
    }
  },
  methods: {
    isMobile () {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    onToggle () {
      this.$emit('toggle')
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
    margin:0;
    border-bottom: 1px solid lightgray;
    z-index: 2000;
  }

  #toggle {
    position: fixed;
    top:5px;
    right: 10px;
  }

  .md-48 {
    font-size: 48px !important;
  }

</style>
