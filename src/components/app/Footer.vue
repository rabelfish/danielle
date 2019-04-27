<template>
  <div id="footer">
    <div>
      <iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fdanielle-fisher-703505434&color=orange_white&size=32" style="width: 32px; height: 32px;"></iframe>
      <a href="https://www.facebook.com/danielle.fisher.965" target="_blank"><img :src="require('@/assets/images/FB-f-Logo__blue_50.png')" alt="FB" height="32"></a>
    </div>
    <br>
    <div class="caption">&copy; Danielle Fisher Music 2019</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [{
        name: 'HOME',
        link: '/'
      },
      {
        name: 'ABOUT',
        link: 'about'
      },
      {
        name: 'MUSIC',
        link: 'music'
      },
      {
        name: 'CONTACT',
        link: 'contact'
      }]
    }
  }
}
</script>

<style>
  #footer {
    height: 150px;
    background: #fff;
    text-align: center;
    padding: 30px;
    z-index:1;
  }

  .footer-link:hover {
    cursor: pointer;
    /* maybe make this lighter on hover */
  }
</style>
