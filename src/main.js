import Vue from 'vue'
import App from './App'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.prototype._i18n = i18n
App.mpType = 'app'

const app = new Vue({
  i18n,
  ...App,
})
app.$mount()
