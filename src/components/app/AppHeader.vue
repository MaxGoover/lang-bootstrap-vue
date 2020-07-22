<template>
  <nav class="navbar navbar-expand-md bg-light">
    <!--Логотип-->
    <a class="navbar-brand ml-2 ml-sm-3" href="#">
      <img
        alt="logo"
        height="35"
        src="../../../public/boot_32.png"
        width="35"
      >
      {{ $t('app.name') }}
    </a>

    <!--Икнока меню-->
    <button
      class="navbar-toggler" type="button" data-toggle="collapse"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
      data-target="#navbar"
    >
      <i class="fas fa-bars"/>
    </button>

    <!--Элементы меню-->
    <div class="collapse navbar-collapse " id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item ml-3 my-auto">
          <a class="nav-link" href="#">Тренировки</a>
        </li>
        <li class="nav-item ml-3">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>

      <!--Профиль пользователя-->
      <div class="nav-item dropdown ml-auto">
        <a
          class="nav-link dropdown-toggle" id="navbarDropdown"
          role="button" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false"
        >
          Имя пользователя
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
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
