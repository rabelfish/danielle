<template>
<div>
  <div id="contact-layout">
    <v-layout row wrap align-center justify-center>
      <img :src="require('@/assets/images/flute-on-sheet.jpg')" alt="bckgound" class="bg" />
      <v-flex id="contact-info" xs12 class="primary--text">
        <p>I am located in Fresno, CA. </p>
        <p>Please feel free to reach out to me via email at <span id="email"><strong>daniellegfisher48@gmail.com</strong></span></p>
      </v-flex>
    </v-layout>
</div>
</div>
</template>

<style>

 #contact-info {
   margin-top: 150px;
    font-size: 30px;
    z-index: 10;
 }

 #notes {
   width: 100%;
   opacity: 0.2;
 }

 #contact-layout {
  height: 800px;
  position: relative;
  margin-top: 0;
  height: 100%;
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

@media (max-width: 480px) {
  #email {
    font-size: 20px;
  }
}

</style>
