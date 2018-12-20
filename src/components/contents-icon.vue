<template lang="pug">
a.contentsButton(:style="{'--color': this.bgcolor}" :href="this.link")
  .contentsButton__wrap
    img(:src='"material/" + this.image + ".png"')
    p {{icon_title}}
</template>

<script>
export default {
  props:{
    icon_title: {},
    image: {},
    bgcolor: {},
    link: {}
  }
}
</script>

<style lang="scss" scoped>
.contentsButton{
  --color:red;
  background: var(--color);
  padding: 4px;
  border-radius: 10px;
  box-sizing: border-box;
  &__wrap{
    border: dashed 2px white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120px;
    border-radius: 10px;
    box-sizing: border-box;
    & > *{
      padding: 5px;
    }
    p{
      color: white;
      font-family: tunnel;
    }
  }
}

</style>
