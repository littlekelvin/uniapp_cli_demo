import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.config.productuinTip = false

const i18n = new VueI18n({
  locale: 'en-US',
  messages: {
    'en-US': {
      index: {
        invite: 'Invite',
        game: 'Game',
      },
    },
    'zh-CN': {
      index: {
        invite: '邀请',
        game: '游戏',
      },
    },
  },
})

export default i18n
