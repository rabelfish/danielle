<template>
  <div id="about">
    <v-layout row wrap>
      <v-flex sm6>
         <v-layout row wrap>
            <v-flex xs12>
              <img :src="require('@/assets/danielle-4.jpg')" alt="danielle" width="500px" aspect-ratio="1">
            </v-flex>
            <v-flex xs12>
              <img :src="require('@/assets/danielle-1.jpg')" alt="danielle" width="250px" aspect-ratio="1">
              <img :src="require('@/assets/danielle-3.jpg')" alt="danielle" width="250px" aspect-ratio="1">
            </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs6>
        <div id="about-text" class="text-xs-center">
          <p class="primary--text">Born in 1995 in Simi Valley, California, I started playing flute at the age of nine and very quickly fell
            in love with music.
             <br /><br />
            In high school, I took multiple band classes every year, and learned to play the saxophone in
            jazz band in addition to participating in concert band. I first started composing at the age of 16, when I wrote
            my first piece for my high school jazz band.
             <br /><br />
            However, it wasn’t until college that I really found my passion for
            composing music. I received a Bachelor of Arts degree in composition from California State University, Fresno where I
            studied with Dr. Kenneth Froelich and Dr. Benjamin Boone.
             <br /><br />
            I have written music for large ensembles like concert band
            and orchestra, as well as chamber music for string quartet, flute ensemble, duets, trios and even solo voice. I had
            many pieces performed while I was at Fresno State, and most recently have been composing works by commission as I prepares
            to start my masters degree.
            <br /><br />
            I currently resides in Fresno, California and am working for the Fresno Philharmonic.
          </p>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<style>
  #about {
    margin-top:60px;
  }

  #about-text {
    width: 80%;
    font-size: 20px;
    padding-top:30px;
  }
</style>
