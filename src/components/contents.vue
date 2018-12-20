<template lang="pug">
  .contents
    .contents__title
      h1 コンテンツ
    .contents__wrap
      icon(icon_title="クッキング" image="cooking" bgcolor="#fe888a" link="cooking.html")
      icon(icon_title="スペシャル" image="special" bgcolor="#73c4ab")
      icon(icon_title="コラム" image="column" bgcolor="#f38cab")
      icon(icon_title="なぞかけ" image="nazokake" bgcolor="#a5d296")
      icon(icon_title="インタビュー" image="interview" bgcolor="#ffa28c")
      icon(icon_title="おこせんソング" image="song" bgcolor="#dc90db")
      icon(icon_title="ごきげんコンテンツ" image="gokigen" bgcolor="#fab441")
      icon(icon_title="ニュース" image="news" bgcolor="#47a2d3")
      icon(icon_title="レポート" image="report" bgcolor="#d89706")
</template>

<script>
import icon from './contents-icon.vue';
export default {
  components: {
    'icon': icon,
  }
}
</script>

<style lang="scss" scoped>
.contents{
  background-color: #facd89;
  &__title{
    padding: 2rem 0;
    h1{
      color: #d68f51;
      text-align: center;
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
  }
  &__wrap{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

  }
}
</style>
