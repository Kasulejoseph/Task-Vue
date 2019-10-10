import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import vuetify from './plugins/vuetify';
import { ValidationProvider, ValidationObserver} from 'vee-validate/dist/vee-validate.full';

Vue.config.productionTip = false
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
