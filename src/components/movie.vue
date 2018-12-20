<template lang="pug">
.movie
  .movie__contents
    .movie__contents__title
      h1 ムービーキャンペーン
    .movie__contents__wrap
      video(controls v-on:mouseover="mouseover")
        source(src="material/okosentaisou.mp4" type="video/mp4")
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
}
</style>
