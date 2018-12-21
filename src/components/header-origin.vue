<template lang='pug'>
  header
    .header
      img(class="header--logo" src="material/logo.png" href="index.html")
      .header__characters
        img(class="header__characters--char" src="material/hirayama.png")
        img(class="header__characters--char" src="material/hakase.png")
        img(class="header__characters--char" src="material/iwanen.png")
    .menuButton(v-on:click='doClick=!doClick; not_doClick=!not_doClick;' v-bind:class='{menuButton__none:not_doClick}')
      p メニュー
      span
      span
    .menu(v-bind:class='{menu__move:doClick}')
      ul.menu__wrap
        li.menu__wrap__close(v-on:click='doClick=!doClick; not_doClick=!not_doClick;')
          p とじる
          .menu__wrap__close__box
            span.menu__wrap__close__box--1
            span.menu__wrap__close__box--2
        li
          a(href="index.html") トップ
        li
          a(href="") キャンペーン
        li
          a(href="") コンテンツ
        li
          a(href="")
            img.menu__wrap--twitter(src="material/twitterwhite.png")
        li
          img.menu__wrap--iwatuka(src="material/iwatuka_logo.png")
</template>
<script>
export default {
    data(){
      return {
        doClick: false,
        not_doClick: false
      }
    }
}
</script>

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
      cursor: pointer;
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
        cursor: pointer;
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
      transition: all .3s ease 0s;
      &__none{
        opacity: 0;
        transition: all .3s ease 0s;
      }
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
      // transform: translateY(0%);
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100vw;
      background: #f6b37f;
      transition: all .3s ease 0s;
      margin-top: 85px;
      &__move{
        transform: translateY(0%);
        transition: all .3s ease 0s;
      }
      &__wrap{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        height: calc(100vh - 85px);
        width: 100vw;
        &__close{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          p{
            color: white;
          }
          &__box{
            position: relative;
            height: 50px;
            width:50px;
            span{
              position: absolute;
              top: 0;left: 0;
              bottom: 0; right: 0;
              height: 1px;
              width: 50px;
              background: white;
              display: block;
              margin: auto;
              transform-origin: center;
            }
            &--1{
              transform: rotate(45deg);
            }
            &--2{
              transform: rotate(-45deg);
            }
          }
        }
        a{
          color: white;
          font-size: 1rem;
          font-weight: 100;
        }
        li:nth-child(n+2):nth-child(-n+4){
          padding-bottom: 1.5rem;
          text-align: center;
          width: 50%;
          border-bottom: 1px solid white;
        }
        &--twitter{
          height: 28px;
          width: auto;
        }
        &--iwatuka{
          height: 60px;
          width: auto;
        }
      }
    }
  }
</style>
