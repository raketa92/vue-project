import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../services/axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenId: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.tokenId = userData.token
      state.userId = userData.userId
    },
  },
  actions: {
    login (authData) {
      axios.post('/verifyPassword?key=AIzaSyAMIsdj8YNcbJqa2-VmzxmA_VsbtmI1VuE', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }).then(res => {console.log(res)}).catch(error => console.log(error))
    },
  },
  modules: {
  }
})
