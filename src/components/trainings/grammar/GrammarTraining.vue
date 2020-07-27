<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions" data-slide-to="0"
          class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
<!--          <img src="https://picsum.photos/1200/600" class="d-block w-100" alt="active">-->
          <div class="d-block h-100 w-100"></div>
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/public/img/labyrinth.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/public/img/labyrinth.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev" href="#carouselExampleCaptions"
        role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next" href="#carouselExampleCaptions"
        role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'GrammarTraining',
    components: {
      // GrammarTrainingToolbar: () => import('./GrammarTrainingToolbar'),
      // GrammarTrainingContent: () => import('./GrammarTrainingContent'),
      // GrammarTrainingFooter: () => import('./GrammarTrainingFooter')
    },
    props: { alias: { type: String } },
    computed: {
      ...mapState('training', [
        'exercises',
        'training'
      ])
    },
    created() {
      this.$store.commit('app/setShowAppHeader', false)
      this.$store.commit('app/setShowAppFooter', false)
      this.$store.dispatch('training/getExercises', this.alias)
    },
    beforeDestroy() {
      this.$store.commit('app/setShowAppHeader', true)
      this.$store.commit('app/setShowAppFooter', true)
    }
  }
</script>

<style scoped>

</style>
