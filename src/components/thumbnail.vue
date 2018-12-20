<template lang="pug">
.thumbnail(:style="{'--color': this.bgcolor}")
  .thumbnail__wrap
    img(:src='"material/"+ thumbnail_image +".png"')
    .thumbnail__wrap__text
      h1 {{thumbnail_text}}
      p {{thumbnail_view}}
</template>

<script>
export default {
  props:{
    thumbnail_text: {},
    thumbnail_image: {},
    thumbnail_view: {},
    bgcolor: {}
  }
}
</script>

<style lang="scss">
.thumbnail{
  --color: white;
  width: 100%;
  margin: 1rem 0;
  &__wrap{
    width: 90%;
    margin: auto;
    border-bottom: solid 1rem var(--color);
    border-radius: 0.5rem;
    overflow: hidden;
    img{
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    &__text{
      padding: 1rem;
      background: white;

      h1{
        font-size: 1rem;
        color: black;
      }
    }
  }
}
</style>
