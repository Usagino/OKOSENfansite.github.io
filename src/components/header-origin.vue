<template lang='pug'>
  header
    .header
      img(class="header--logo" src="material/logo.png")
      .header__characters
        img(class="header__characters--char" src="material/hirayama.png")
        img(class="header__characters--char" src="material/hakase.png")
        img(class="header__characters--char" src="material/iwanen.png")
    .menuButton
      p メニュー
      span
      span
    .menu
      ul.menu__wrap
</template>

<style scoped lang="scss" scoped>
  @mixin dot{
    background-color: #FDF8ED;
    background-image: radial-gradient(#FFEDB6 10%, transparent 20%), radial-gradient(#FFEDB6 10%, transparent 20%);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }
  header{
    position: fixed;
    z-index: 999;
    .header{

      @include dot;
      height: 85px;
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,.2);
      &--logo{
        width: auto;
        height: 60px;
      }
      &__characters{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        height: 100%;
        &--char{
          height: 40px;
          width: auto;
        }
      }
    }
    .menuButton{
      height: 30px;
      width:60px;
      @include dot;
      border-radius: 0 0 50px 50px;
      position: absolute;
      left: 0;right: 0;
      margin: auto;
      box-shadow: 0 7px 10px -10px rgba(0,0,0,.2);
      p{
        position: absolute;
        left: 0;right: 0;
        margin: auto;
        color: #fc913a;
        font-size: 10px;
        top: -16px;
        text-align: center;
        font-weight: bold;
      }
      span{
        height: 4px;
        width: 60%;
        background: #fc913a;
        display: block;
        margin: 4px auto;
      }
    }
    .menu{
      transform: translateY(-100%);
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: black;
    }
  }
</style>
