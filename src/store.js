import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = "北京"
defaultCity = localStorage.city || "北京";
export default new Vuex.Store({
  state: {
    cityName: defaultCity,
    userInfo: null,
    login: false
  },
  mutations: {
    setCityName(state,Name) {
      state.cityName = Name;
      localStorage.city = Name;
    },
    getUserInfo(state, info) {
      state.userInfo = info;
      state.login = true;
    },
  },
  actions: {

  }
})
