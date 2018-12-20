<template lang="pug">
.thumbnail(:style="{'--color': this.bgcolor}")
  .thumbnail__wrap
    img(:src='"material/"+ thumbnail_image +".png"')
    .thumbnail__wrap__text
      p {{thumbnail_text}}
      p.thumbnail__wrap__text--view Viewers {{thumbnail_view}}
      .thumbnail__wrap__text__tag
        img(src="material/icon_cooking.png")
        p クッキング
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
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: hidden;

    img{
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    &__text{
      padding: 1rem;
      background: white;
      position: relative;
      p{
        font-size: 1rem;
        color: black;
      }
      &--view{
        padding-top: 1rem;
        text-align: right;
      }
      &__tag{
        position: absolute;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        bottom: 100%;
        left: 0;
        padding: 2px 1rem;
        border-top: solid 1rem var(--color);
        border-radius: 0.5rem 0.5rem 0 0;
        overflow: hidden;
        img{
          padding-left: 1rem;
          width: 1rem;
          height: auto;
        }
        p{
          color: var(--color)
        }
      }
    }
  }
}
</style>
