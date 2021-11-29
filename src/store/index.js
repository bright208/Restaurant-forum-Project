import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser// 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
      }
      state.isAuthenticated = true// 將使用者的登入狀態改為 true
    }
  },
  actions: {
    async fetchCurrentUser(object) {
      try {
        const { data } = await userAPI.getCurrentUser()
        object.commit('setCurrentUser', data)
      }
      catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
