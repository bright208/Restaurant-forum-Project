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
        ...currentUser
      }
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
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
})