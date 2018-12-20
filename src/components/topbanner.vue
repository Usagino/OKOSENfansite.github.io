<template lang="pug">
.banner
  .banner__carousel
    carousel(v-bind:per-page=1 :autoplay="true" :loop="true")
      slide
        img(src="material/carousel_0.png")
      slide
        img(src="material/carousel_1.png")
      slide
        img(src="material/carousel_2.png")
      slide
        img(src="material/carousel_3.png")
  .banner__column
    p.banner__column--title 更新情報
    section.banner__column__wrap
      time.section.banner__column__wrap--time 2018.11.01
      p.section.banner__column__wrap--new NEW
      p.section.banner__column__wrap--text LICOさんコラム、『あっぱれ！』フォトをピックアップを更新しました。
    .banner__column__next
      a.banner__column__next--button 一覧へ
  jagged(bgcolor="#F5A260" class="banner__jagged")
</template>

<script type="text/javascript">
import jagged from './jagged.vue';

export default {
  components: {
    jagged
  }
}


</script>


<style scoped lang="scss">
.banner{
  background-color: #F5A260;
  width: 100vw;
  position: relative;

  padding-bottom: 10px;
  &__carousel{
    width: 100%;
    margin: auto;
    padding: 1rem 0;
    border-radius: 1rem;
    overflow: hidden;
    img{
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }
  &__column{
    margin:auto;
    box-shadow: 0 2px 10px rgba(0,0,0,.2);
    border-radius: 10px;
    background-color: #FACD89;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &--title{
      font-weight: bold;
      color: white;
      padding: 0.5rem 0;
      font-size: 1rem;
    }
    &__wrap{
      border-radius: 10px;
      width: 90%;
      padding: 1rem 0.5rem;
      box-sizing: border-box;
      font-size: 1rem;
      background-color: #FFFFFF;
      &--time{
        display: inline;
      }
      &--new{
        display: inline;
        margin: 0 1rem;
        color: #EC6262;
        font-weight: bold;
      }
    }
    &__next{
      width: 90%;
      &--button{
        text-align: right;
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
