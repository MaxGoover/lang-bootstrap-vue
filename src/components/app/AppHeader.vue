<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{ $t('app.name') }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
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
