<template lang="pug">
.campaignCard
  .campaignCard__wrap
    img(src="material/campaign_1.png")
    .campaignCard__wrap__title
      <h1>{{ title }}</h1>
    a(class="campaignCard__wrap--link")
      h1 くわしく見る
</template>

<script>
export default {
  props:['title'],
}
</script>

<style lang="scss" scoped>
.campaignCard{
  width: 100vw;
  background-color: #fffcec;
  padding: 20px 0;
  &__wrap{
    width: 90vw;
    margin: auto;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,.2);
    img{
      width: 90vw;
      height: 90vw;
    }
    &__title{
      background: white;
      h1{
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
      }
    }
    &--link{
      background: #e29e71;
      h1{
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        color: white;
      }
    }
  }
}
</style>
