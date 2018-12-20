<template lang="pug">
.polaroid
  img(:src='"material/kids_"+ kids_num + ".jpg"')
  .polaroid__good
    .polaroid__good__icon
      img(src="material/good.png")
      p 2
</template>

<script>
export default {
  props:{
    kids_num:{}
  }
}
</script>

<style scoped lang="scss">
.polaroid{
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 3px 5px 0px #cccccc;
  background: white;
  padding: 6%;
  img{
    width: 100%;
  }
  &__good{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    &__icon{
      background: #fc6668;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      width: 60px;
      border-radius: 5px;
      img{
        margin-right: 2px;
        width: 18px;
        height: 18px;
      }
      p{
        color: white;
      }
    }
  }
}
</style>
