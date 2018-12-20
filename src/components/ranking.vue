<template lang="pug">
.ranking(:style="{'--color': this.bgcolor}")
  .ranking__title
    img(:src='"material/icon_"+ image +".png"')
    p おこせんソング
  .ranking__textbox
    p.ranking__textbox__text {{text}}
    p.ranking__textbox__view Viewers {{view}}
</template>

<script>
export default {
  props:{
    bgcolor: {},
    image:{},
    text: {},
    view: {}
  }
}
</script>

<style scoped lang="scss">
.ranking{
  --color:red;
  width: 90%;
  margin: auto;
  background: white;
  border-bottom: 2px solid var(--color);
  padding: 1rem;
  box-sizing: border-box;
  &__title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding-bottom: 1rem;
    img{
      height: 1rem;
      width: auto;
      padding-right: 0.5rem;
    }
    p{
      color: var(--color)
    }
  }
  &__textbox{
    &__view{
      text-align: right;
    }
  }
}
</style>
