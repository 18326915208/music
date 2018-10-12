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
var countNum = JSON.parse(localStorage.getItem('count') || 0);
const store = new Vuex.Store({
  state: {
    nums: 0,
    count: countNum
  },
  mutations: {
    // 注意：如果要操作store中的state值，只能通过mutation提供的方法，
    // 才能操作对应的数据。不推荐直接操作state中的数据
    increment (state) { // 参数state是被规定死的 不变
      state.nums++;
      state.count++;
      localStorage.setItem('count', state.count)
    },
    // mutations的函数参数列表中最多支持两个参数，其中参数1：是state状态；
    // 参数2：通过commit提交过来的参数；
    subtract (state, payload) {
      // state.count--
      state.nums -= payload
      state.count -= payload
      if (state.nums < 0) {
        state.nums = 0
      }
      if (state.count < 0) {
        state.count = 0
      }
      localStorage.setItem('count', state.count)
    }
    // 如果子组件调用mutation中的方法，只能使用this.$store.commit('方法名')
  },
  getters: {
    // 这里getters只负责对外提供数据，不负责修改数据，如果想要修改state中的数据，去找mutation
    optCount: function (state) {
      return '当前最新的count值：' + state.count
    }
  }
})
// vuex 总结
// 1、state中的数据不能直接修改，如果想要修改，必须通过mutation
// 2、如果组件想要直接从state上获取数据，需要this.$store.state.xx
// 3、如果组建想要修改数据 必须使用mutation提供的方法，需通过this.$store.commit('方法名'，唯一的一个参数)
// 4、如果store中state上的数据，在对外提供的时候，需要座一层包装，推荐使用getters,则用this.$store.getters.xx

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
