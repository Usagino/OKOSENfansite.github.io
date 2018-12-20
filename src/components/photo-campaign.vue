<template lang="pug">
.photo
  .photo__contents
    .photo__contents__title
      h1 フォトキャンペーン
    .photo__contents__wrap
      p.photo__contents__wrap--text テーマに合ったお子様の画像を下記のフォームからお送りください。<br>画像をご投稿いただいた方の中から抽選で、<span>岩塚製菓の商品詰合せを毎月6名様</span>にプレゼントします。<br>ふるってご応募ください！
      img.photo__contents__wrap--image(src="material/photocampain.png")
      hr.photo__contents__wrap--line
      .photo__contents__wrap__thema
        p 今回のテーマ
        p.photo__contents__wrap__thema--happy Happy
      .photo__contents__wrap__appli
        p 【応募期間】2018年12月3日（月）〜2019年2月28日（木）
  .photo__gallery
    .photo__gallery__title
      h1 ギャラリー
      carousel(:per-page=1 :autoplay="true" :loop="true" :speed="700")
        slide
          polaroid(kids_num="1")
        slide
          polaroid(kids_num="2")
        slide
          polaroid(kids_num="3")
        slide
          polaroid(kids_num="4")
</template>

<script>
import polaroid from './polaroid.vue';
export default {
  components:{
    'polaroid': polaroid
  }
};
</script>

<style scoped lang="scss">
@mixin text_line{
  text-align: justify;
  -webkit-font-feature-settings : "palt";
  font-feature-settings : "palt";
}
@mixin shadow{
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
.photo{
  background: #fffcec;
  &__contents{
    padding: 2rem 0;
    background: #fff799;
    &__title{
      margin: 1rem 0;
      h1{
        text-align: center;
        @include shadow;
      }
    }
    &__wrap{
      background: white;
      width: 90%;
      margin: auto;
      padding: 1rem 3rem 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      border-radius: 4px;
      &--text{
        @include text_line;
        span{
          color:#ff6565;
        }
      }
      &--image{
        width: 80%;
        height: auto;
        margin: 1rem 0;
      }
      &--line{
        background: #fe888a;
        border: none;
        height: 1px;
      }
      &__thema{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        p{
          font-size: 1rem;

        }
        &--happy{
          margin-left: 1rem;
          color: white;
          border-radius: 4px;
          background-color: #fe888a;
          padding: 4px 8px;
        }
      }
      &__appli{
        margin-top: 1rem;
        background: #fe888a;
        width: 141%;
        p{
          padding: 0.5rem 0;
          color: white;
          text-align: center;
        }
      }
    }
  }
  &__gallery{
    h1{
      text-align: center;
      @include shadow;
    }
    .polaroid{
      margin: 2rem;
    }
  }
}
</style>
