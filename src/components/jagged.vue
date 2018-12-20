<template lang="html">
  <div class="zigzag" :style="{'--color': this.bgcolor}">
    <span></span>
  </div>
</template>


<script>
const hoge = '#F5A260';
export default {
  props:{
    bgcolor: {}
  }
}
</script>

<style lang="scss" scoped>
.zigzag {
  --color:red;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 0px;
  margin-bottom: 40px;
  background: var(--color);
  span{
    height: 20px;
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -20px;
    background-size: 30px 30px !important;
    background: linear-gradient(135deg, var(--color) 10px ,transparent 0), linear-gradient(225deg, var(--color) 10px ,transparent 0)
  }
}
</style>
