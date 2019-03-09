<template>
<div>
  <div id="contact-layout">
    <v-layout row wrap align-center justify-center>
      <v-flex id="contact-info" xs12 class="primary--text">
        <p>I am located in Fresno, CA. </p>
        <p>Please feel free to reach out to me via email at <span id="email"><strong>daniellegfisher48@gmail.com</strong></span></p>
      </v-flex>
    </v-layout>
      <!-- <img id="notes" :src="require('@/assets/rainbow-notes.jpg')" alt="notes" aspect-ratio="1"> -->
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
}

#contact-layout::after {
  content: "";
  background-image: url('../../assets/flute-on-sheet.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  opacity: 0.3;
}

@media (max-width: 480px) {
  #email {
    font-size: 20px;
  }
}
</style>
