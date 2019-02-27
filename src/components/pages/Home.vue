<template>
  <div id="home">
    <v-layout row>
      <v-flex xs12 mt-5 mb-5 align-content-center>
        <div>
         <img :src="require('@/assets/danielle-2-square.jpg')" alt="danielle" width="400px" :style="{'border-radius': '50%'}" aspect-ratio="1">
         </div>
      </v-flex>
    </v-layout>
    <v-layout row justify-center align-center>
      <v-flex xs12>
        <div class="test-xs-center">
          <p id="hi" class="primary--text"> Hi, I'm Danielle and I love music!</p>
        </div>
      </v-flex>
    </v-layout>
    <br>
    <v-layout row wrap align-center justify-center>
      <iframe :style="{'min-width':'500px'}" width="70%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/321862974&color=%23432854&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style>

#hi {
  font-size: 40px;
}

</style>
