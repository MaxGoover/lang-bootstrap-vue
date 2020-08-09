import Vue from 'vue'
import { i18n } from '../i18n'

export default class Notifications {
  group = 'main'
  text
  title
  type =''

  constructor (text, title) {
    this.text = 'cartItemNotifications.' + i18n.t(text)
    this.title = 'status.' + i18n.t(title)
    console.log(this)
  }

  showError() {
    this.#setType('error')
    Vue.notify(this)
  }

  showSuccess() {
    this.#setType('success')
    Vue.notify(this)
  }

  showWarning() {
    this.#setType('warn')
    Vue.notify(this)
  }

  #setType (type) {
    this.type = type
  }
}
