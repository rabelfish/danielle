<template>
  <div id="home">
    <div id="home-layout">
      <v-layout row>
        <v-flex xs12 mt-5 mb-5 align-content-center>
          <img :src="require('@/assets/images/piano-sheet.jpg')" alt="bckgound" class="bg" />
          <div>
          <img id="avatar" :src="require('@/assets/images/danielle-2-square.jpg')" alt="danielle" aspect-ratio="1">
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
    </div>
    <br>
    <v-layout row wrap align-center justify-center>
      <iframe id="sc_single" width="70%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/321862974&color=%23432854&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
  position: relative;
  font-weight: 2;
  margin-top: -20px;
  margin-bottom: 50px;
  z-index: 2;
}

#home-layout {
  height: 800px;
  position: relative;
  margin-top: 0;
  width:100%;
}

.bg {
  width:100%;
  height:auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 0;
  opacity: 0.4;
}

 @media (max-width: 1100px) {
    .bg {
      width: 235%;
    }
  }
#avatar {
  border-radius: 50%;
  z-index: 2;
  width: 35%;
  min-width: 340px;
  position: relative;
}

#sc_single {
  min-width: 370px;
  z-index: 1;
}

</style>
