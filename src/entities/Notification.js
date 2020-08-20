import Vue from 'vue'
import { i18n } from '../i18n/index'

export default class Notifications {
  group = 'main'
  text
  title
  type =''

  constructor (text) {
    this.text = i18n.t('notifications.' + text)
  }

  showError() {
    this.setStatus('error')
    Vue.notify(this)
  }

  showSuccess() {
    this.setStatus('success')
    Vue.notify(this)
  }

  showWarning() {
    this.setStatus('warning')
    Vue.notify(this)
  }

  setStatus (status) {
    this.title = i18n.t('status.' + status)
    this.type = status
  }
}
