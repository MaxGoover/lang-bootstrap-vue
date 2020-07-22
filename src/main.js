import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Vue from 'vue'
import { i18n } from './i18n/index'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
