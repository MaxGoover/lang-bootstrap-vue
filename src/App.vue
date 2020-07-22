<template>
  <div id="app">
    <!--Хеадер-->
    <app-header v-if="showHeader"/>

    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader: () => import('./components/app/AppHeader')
  },
  computed: { ...mapState('app', ['showHeader']) }
}
</script>

<style>

</style>
