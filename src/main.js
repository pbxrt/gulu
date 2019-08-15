import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import toast from './plugins/toast';

Vue.config.productionTip = false
Vue.use(toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
