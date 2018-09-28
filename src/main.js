// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import qs from 'qs'

Vue.use(VueResource)

Vue.use(Vuex)

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
// Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
