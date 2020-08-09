<template>
  <div id="app">
    <!--Хеадер-->
    <app-header v-if="showAppHeader"/>

    <!--Контент-->
    <router-view/>

    <notifications
      classes="notification-error"
      group="main"
      position="bottom right"
    />

    <!--Футер-->
    <app-footer v-if="false"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Notifications from 'vue-notification'

export default {
  name: 'App',
  components: {
    AppHeader: () => import('./components/app/AppHeader'),
    AppFooter: () => import('./components/app/AppFooter'),
    Notifications
  },
  computed: {
    ...mapState('app', [
      'showAppHeader',
      'showAppFooter'
    ])
  }
}
</script>

<style>
  @import 'assets/App.css';
</style>
