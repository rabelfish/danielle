<template>
  <div id="home">
    <template>
      <!-- <v-parallax :src="require('@/assets/piano.jpg')"></v-parallax> -->
      <!-- <v-parallax :src="require('@/assets/piano-sheet.jpg')"></v-parallax> -->
      <v-parallax :src="require('@/assets/sheet.jpeg')"></v-parallax>
    </template>
    <br>
    <iframe width="50%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/321862974&color=%234e30b6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
