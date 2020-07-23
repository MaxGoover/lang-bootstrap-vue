<template>
  <header>
    <nav class="navbar navbar-expand-md bg-light">
      <!--Логотип-->
      <a class="navbar-brand ml-2 ml-sm-3" href="#">
        <i class="fa fa-ribbon" aria-hidden="true" style="font-size: 26px"/>
        <span class="ml-3">{{ $t('app.name') }}</span>
      </a>

      <!--Иконка меню-->
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-target="#navbar"
        data-toggle="collapse"
      >
        <i class="fa fa-bars" aria-hidden="true"/>
      </button>

      <!--Элементы меню-->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav">
          <router-link
            v-for="(item, i) in menuItems"
            :key="i"
            :to="item.route"
          >
            <li class="nav-item ml-3 my-auto">
              <a class="nav-link">{{ item.title }}</a>
            </li>
          </router-link>
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
    <div class="void"></div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
// import DialogWindow from '../../components/menu/DialogWindow'
import MenuItem from '../../entities/MenuItem'

export default {
  name: 'AppHeader',
  components: {
    // DialogWindow
  },
  computed: {
    ...mapState('app', ['loading']),
    ...mapState('authorization', ['isAuthorized']),
    menuItems() {
      return this.isAuthorized ? [
        new MenuItem(
          'mdi-account-edit',
          this.$i18n.t('appHeader.trainings'),
          { name: 'Grammar' }
        ),
        new MenuItem(
          'mdi-logout',
          this.$i18n.t('appHeader.logout'),
          null,
          this.showDialog
        )
      ] : [
        new MenuItem(
          'mdi-login',
          this.$i18n.t('appHeader.login'),
          { name: 'Login' }
        ),
        new MenuItem(
          'mdi-lock-open',
          this.$i18n.t('appHeader.signup'),
          { name: 'Signup' }
        )
      ]
    }
  }
  // methods: {
  //   showDialog() {
  //     this.$store.commit('menu/setShowDialog', true)
  //   }
  // }
}
</script>

<style scoped>
@import '../../assets/components/app/AppHeader.css';
</style>
