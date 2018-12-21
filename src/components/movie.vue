<template lang="pug">
.movie
  .movie__contents
    .movie__contents__title
      h1 ムービーキャンペーン
    .movie__contents__wrap
      video(src="material/okosentaisou.mp4" controls v-on:mouseover="mouseover" poster="material/okosentaisou.png")
  .movie__textbox
    p.movie__textbox--title 「スペシャルおこせん体操」
    hr
    p みんなでおこせん体操を踊って「スペシャルおこせん体操」を完成させよう！！
    a 「おこせん体操」についてはコチラから！
    .movie__textbox__about
      p お子様が「おこせん体操」踊っている動画を募集しています。<br>きっとお子様がごきげんになる体操です。一緒に身体を動かしてみてください。
      p 【応募期間】<br>2018年12月3日（月）〜2019年2月28日（木）
    .movie__textbox__button
      p 動画を投稿する
</template>

<script>
export default {
  methods: {
    mouseover: ()=>{
      console.log("Hello");
    }
  }
}
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
.movie{
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
      margin: auto;
      border: dashed 2px white;
      padding: 5px;
      width: 80%;
      video{
        width: 100%;
        height: auto;
        margin: auto;
        display: block;
      }
    }

  }
  &__textbox{
    padding: 1rem;
    background: #fffcec;
    & > *{
      color:#d8751e;
    }
    &--title{
      text-align: center;
      font-size: 1.2rem;
    }
    hr{
      height: 2px;
      border: none;
      background-color: #d8751e;
    }
    p{
      font-size: 0.8rem;
    }
    a{
      margin: 3rem 0;
      text-align: center;
      font-size: 0.8rem;
      color: white;
      padding: 5px;
      background: #dc90db;
      border-radius: 20px;
      box-shadow: 3px 3px 0 #cc92da;
    }
    &__about{
      background: white;
      border-radius: 5px;
      overflow: hidden;
      p:nth-child(1){
        color: black;
        padding: 1rem;
        font-size: 0.7rem;
      }
      p:nth-child(2){
        font-size: 0.7rem;
        color: white;
        background: #fe888a;
        padding: 1rem;
      }
    }
    &__button{

      margin:3rem auto;
      background: #d8751e;
      padding: 0.5rem 1rem;
      box-shadow: 4px 4px 0 #cf9868;
      width: 200px;
      overflow: hidden;
      border-radius: 5px;
      p{
        text-align: center;
        color: white;
        font-size: 1.4rem;
        display: block;
      }
    }

  }
}
</style>
