import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import vuetify from './plugins/vuetify'
import router from './router/router.js'
import VueCookies from './plugins/Cookies'
import VueResource from 'vue-resource'



Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  VueCookies,
  render: h => h(App)
}).$mount('#app')
