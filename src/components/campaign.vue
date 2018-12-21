<template lang="pug">
.campaign
  .campaign__title
    h1 キャンペーン
  .campaign__carousel
    carousel(v-bind:per-page=1 :autoplay="true" :loop="true" speed="1000")
      slide
        card(
          title_1="フォトキャンペーン!"
          title_2="写真投稿でプ レゼントが当たる！"
          image="campaign_1"
          link="photo.html")
      slide
        card(
          title_1="ムービーキャンペーン！"
          title_2="みんなのおこせん体操がひとつに？！"
          image="movie_cam"
          link="movie.html")


  .campaign__characters
    .campaign__characters__hirayama
      img(src="material/hirayama.png")
    .campaign__characters__hakase
      img(src="material/hakase.png")
  jagged(bgcolor="#fff799" class="campaign__jagged")
</template>

<script>
import jagged from './jagged.vue';
import card from './campaign-card.vue';

export default {
  components: {
    'jagged': jagged,
    'card': card,
  }
}
</script>

<style lang="scss" scoped>
.VueCarousel-pagination{
  display: none;
}
.campaign{
  background: #FFF799;
  position: relative;
  &__title{
    padding: 2rem 0;
    h1{
      text-align: center;
      $shadow_size:4px;
      text-shadow:
        #ffffd7 $shadow_size 0px 0px, #ffffd7 $shadow_size*-1 0px 0px,
        #ffffd7 0px $shadow_size*-1 0px, #ffffd7 0px $shadow_size 0px,
        #ffffd7 $shadow_size $shadow_size 0px, #ffffd7 $shadow_size*-1 $shadow_size 0px,
        #ffffd7 $shadow_size $shadow_size*-1 0px, #ffffd7 $shadow_size*-1 $shadow_size*-1 0px,
        #ffffd7 $shadow_size/2 $shadow_size 0px, #ffffd7 $shadow_size/2*-1 $shadow_size 0px,
        #ffffd7 $shadow_size/2 $shadow_size*-1 0px, #ffffd7 $shadow_size/2*-1 $shadow_size*-1 0px,
        #ffffd7 $shadow_size $shadow_size/2 0px, #ffffd7 $shadow_size*-1 $shadow_size/2 0px,
        #ffffd7 $shadow_size $shadow_size/2*-1 0px, #ffffd7 $shadow_size*-1 $shadow_size/2*-1 0px,
        #ffffd7 $shadow_size/2 $shadow_size/2 0px, #ffffd7 $shadow_size/2*-1 $shadow_size/2 0px,
        #ffffd7 $shadow_size/2 $shadow_size/2*-1 0px, #ffffd7 $shadow_size/2*-1 $shadow_size/2*-1 0px;
    }
  }
  &__carousel{
    width: 100vw;
    background-color: #fffcec;
  }
  &__characters{
    height: 160px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    &__hakase{
      width: 50%;
      height: 100%;
      position: relative;
      transform: translateX(50px);

      img{
        top: 0;
        bottom: 0;
        margin: auto;
        right: 0;
        position: absolute;
        transform: rotate(-50deg) ;
        transform-origin: bottom center;
      }
    }
    &__hirayama{
      width: 50%;
      height: 100%;
      position: relative;
      transform: translateX(-40px);
      img{
        top: 0;
        bottom: 0;
        margin: auto;
        left: 0;
        position: absolute;
        transform: rotate(50deg);
        transform-origin: bottom center;
      }
    }
  }
  &__jagged{
    position: absolute;
    bottom:100%;
    bottom: -40px;
    z-index: 2;
  }
}
</style>
