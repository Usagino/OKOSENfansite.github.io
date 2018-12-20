import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import header_okosen from './components/header-origin.vue';
import footer_okosen from './components/footer-origin.vue';
import top_banner from './components/topbanner.vue';
import jagged from './components/jagged.vue';
import campaign from './components/campaign.vue';
import contents from './components/contents.vue';
import cooking from './components/cooking.vue'
import photo_campaign from './components/photo-campaign.vue'
import movie from './components/movie.vue'

Vue.use(VueCarousel);

new Vue({
  el: "#contents",
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide,
    'header-origin': header_okosen,
    'footer-origin': footer_okosen,
    'top-banner': top_banner,
    'jagged': jagged,
    'campaign': campaign,
    'contents': contents,
    'cooking': cooking,
    'photo-campaign': photo_campaign,
    'movie':movie
  },
});

let pos = window.pageYOffset ;
window.onscroll = () => {
  pos = window.pageYOffset ;
}
