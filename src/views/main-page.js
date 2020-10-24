import headerComponent from '../views/header-component.vue'
import footerComponent from '../views/footer-component.vue'
import distributionCard from '../views/distribution-card.vue'
import selectComponent from '../views/select-component.vue'
import searchComponent from '../views/search-component.vue'


export default {
    components: {headerComponent, footerComponent, distributionCard, selectComponent, searchComponent},
    name: 'main-page',
    data() {
        return {
             message: 'hi!',
             showScrollToTop: false,
        }
    },
    mounted() {
        document.onwheel = () => {
          console.log(window.scrollY);
          if (window.scrollY > 200) { 
            this.showScrollToTop = true
          } else {
            this.showScrollToTop = false;
          }
        },
        document.addEventListener('mousedown', function (event) {
            if (event.detail > 1) {
              event.preventDefault();
            }
          }, false)
    },
    methods: {
      searchByAuthor({author}) {
        console.log(author);
      },
      searchByGame({game}) {
        console.log(game);
      },
      scrollToTop() {
        this.showScrollToTop = false;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    },
}