<template lang="pug">
.cooking
  .cooking__title
    .cooking__title__wrap
      .cooking__title__wrap__box
        .cooking__title__wrap__box__title
          img(src="material/cooking.png")
          h2 クッキング
        .cooking__title__wrap__box__text
          p cooking
  .cooking__news
    .cooking__news__titlebox
      h1.cooking__news__titlebox--title 新着記事
      hr.cooking__news__titlebox--line
    .cooking__news__box
      thumbnail(
        thumbnail_text="おつまみ「おこせんブルスケッタ風」"
        thumbnail_image="cooking_1"
        bgcolor="#fe888a")
      thumbnail(
        thumbnail_text="離乳食「おこせんベジスイーツ」"
        thumbnail_image="cooking_2"
        bgcolor="#fe888a")
      thumbnail(
        thumbnail_text="「ピザ風おこせん」(グルテンフリー)"
        thumbnail_image="cooking_3"
        bgcolor="#fe888a")
      .cooking__news__box__nextbox
        h1 もっと見る
    .cooking__news__titlebox
      h1.cooking__news__titlebox--title ランキング
      hr.cooking__news__titlebox--line
    .cooking__news__box
      thumbnail(
        thumbnail_text="おつまみ「おこせんブルスケッタ風」"
        thumbnail_image="cooking_1"
        bgcolor="#fe888a")
</template>

<script>
import thumbnail from './thumbnail.vue'
export default {
  components: {
    'thumbnail': thumbnail,
  }
}
</script>

<style lang="scss">
.cooking{
  padding-bottom: 2rem;
  background: #fffcec;

  &__title{
    &__wrap{
      padding: 10px;
      background-color: #fe888a;
      &__box{
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: dashed 2px white;
        border-radius: 10px;
        &__title{
          display: flex;
          justify-content: center;
          align-items: center;

          & > *{
            display: inline;
          }
          h2{
            padding-left: 10px;
            color: white;
            font-family: tunnel;
          }
          img{
            width: auto;
            height: 24.5px;
          }
        }
        &__text{
          p{color:white;}
        }
      }
    }
  }
  &__news{
    &__titlebox{
      padding: 2rem 0;
      &--title{
        text-align: center;
        color: #000000;
      }
      &--line{
        height: 3px;
        background: #fe888a;
        border: none;
      }
    }
    &__box{
      &__nextbox{
        margin:2rem auto;
        background: #fe888a;
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
          color: white;
        }
      }
    }
  }
}
</style>
