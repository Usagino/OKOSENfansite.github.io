<template lang="pug">
  footer
    .footerwrap
      jagged(bgcolor="#8fc31f" class="footerwrap__jagged")
      .footerwrap__menu
        ul.footerwrap__menu__home
          li HOME
          li コンテンツ
          li メルマガ登録
        ul.footerwrap__menu__sitemap
          li サイトマップ
          li お問い合わせ
        ul.footerwrap__menu__about
          li おこせんとは
          li フォトキャンペーン
          li 個人情報保護方針<br>(プライバシーポリシー)
          li サンプリング
          li ご協力団体募集
    .copylight
      p Copyright  IWATSUKA CONFECTIONERY CO.,LTD. All Rights Reserved.
</template>

<script>
import jagged from './jagged.vue';
export default {
  components: {
    jagged
  }
}
</script>

<style lang="scss" scoped>
.footerwrap{
  background: #8fc31f;
  position: relative;
  &__jagged{
    position: absolute;
    top: 0;
    z-index: 2;
    transform: rotate(180deg);
  }
  &__menu{
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: "home about" "sitemap about";
    grid-gap: 2rem;
    margin:0  2rem;
    padding: 2rem 0;
    li{
      display: inline;
      font-size: 0.8rem;
      padding: 0.3rem 0;
      color: white;

    }
    & > *{
      display: inline-flex;
      justify-content: space-between;
      flex-direction: column;

    }

    &__home{
      grid-area: home;
    }
    &__sitemap{
      grid-area: sitemap;
    }
    &__about{
      grid-area: about;
    }
  }
}
.copylight{
  background-color:white;
  p{
    text-align: center;
    color:#8fc31f;
    margin: 2rem;
    font-size: 0.5rem;
  }
}

</style>
