import Vue from 'vue'
import App from './App'
import i18n from './i18n'
import store from './store'

Vue.config.productionTip = false

Vue.prototype._i18n = i18n
App.mpType = 'app'

const app = new Vue({
  i18n,
  store,
  ...App
})
app.$mount()
