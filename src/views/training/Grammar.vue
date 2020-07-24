<template>
  <section>
    <div class="container">
      <div class="row">
        <div class=" d-none d-lg-block col-lg-2">
          on lg and wider screens
        </div>
        <div class="col-md-12 col-lg-10">
          <div class="row">
            <div class="d-flex">
              <!--Заголовок-->
              <h1 class="mb-4">Грамматические тренировки</h1>
            </div>
            <!--Список уровней-->
            <grammar-level
              v-for="(level, i) in levels"
              :key="i"
              :level="level"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Grammar',
  components: {
    GrammarLevel: () => import('../../components/training/grammar/GrammarLevel')
  },
  computed: {
    ...mapState('grammar', ['levels'])
  },
  created () {
    this.$store.dispatch('grammar/getLevels')
  }
}
</script>

<style scoped>

</style>
