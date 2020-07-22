<template>
  <b-navbar toggleable="md">
    <!--Логотип-->
    <b-navbar-brand href="#">
      <img
        alt="Kitten"
        class="ml-3"
        src="https://picsum.photos/34/34"
      >
      <span class="ml-3">{{ $t('app.name') }}</span>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"/>

    <!--Элементы меню-->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto" right>

        <b-nav-item href="#" disabled>Sign In</b-nav-item>
        <b-nav-item href="#">Sign Up</b-nav-item>

        <b-nav-item-dropdown>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import {mapState} from 'vuex'
  // import DialogWindow from '../../components/menu/DialogWindow'
  // import MenuItem from '../../entities/MenuItem'

  export default {
    name: 'AppHeader',
    components: {
      // DialogWindow
    },
    data() {
      return {toggleDrawer: false}
    },
    computed: {
      ...mapState('authorization', ['isAuthorized']),
      ...mapState('general', ['loading']),
      menuItems() {
        return this.isAuthorized ? [
          // new MenuItem(
          //   'mdi-eye',
          //   this.$i18n.t('appHeader.reading'),
          //   { name: 'Reading' }
          // ),
          // new MenuItem(
          //   'mdi-eye',
          //   this.$i18n.t('appHeader.video'),
          //   { name: 'Video' }
          // ),
          // new MenuItem(
          //   'mdi-account-edit',
          //   this.$i18n.t('appHeader.grammar'),
          //   { name: 'Grammar' }
          // ),
          // new MenuItem(
          //   'mdi-logout',
          //   this.$i18n.t('appHeader.logout'),
          //   null,
          //   this.showDialog
          // )
        ] : [
          // new MenuItem(
          //   'mdi-login',
          //   this.$i18n.t('appHeader.login'),
          //   { name: 'Login' }
          // ),
          // new MenuItem(
          //   'mdi-lock-open',
          //   this.$i18n.t('appHeader.signup'),
          //   { name: 'Signup' }
          // )
        ]
      }
    },
    methods: {
      showDialog() {
        this.$store.commit('menu/setShowDialog', true)
      }
    }
  }
</script>

<style scoped>
@import '../../assets/components/app/AppHeader.css';
</style>
