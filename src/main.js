import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import vuetify from './plugins/vuetify'
import router from './router/router.js'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
