<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="d-flex">
          <!--Заголовок-->
          <h1 class="mb-4 ml-4">Грамматические тренировки</h1>

          <!--Список уровней-->
          <grammar-level
            v-for="(level, i) in levels"
            :key="i"
            :level="level"
          />
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
    ...mapState('training/grammar', ['levels'])
  },
  created () {
    this.$store.dispatch('training/grammar/getLevels')
  }
}
</script>

<style scoped>

</style>
