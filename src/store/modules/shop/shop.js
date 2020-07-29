import { axios } from "../../../axios";

export default {
  namespaced: true,
  state: {
    groups: {}
  },
  getters: {},
  mutations: {
    setGroups (state, payload) {
      state.groups = payload
    }
  },
  actions: {
    getGroups ({ commit }) {
      this.commit('app/startLoading')
      axios.post('shop/group/index')
        .then(
          response => {
            console.log(1, response.data)
            commit('setGroups', response.data)
            // commit('setTraining', response.data.training)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.commit('app/stopLoading') })
    }
  }
}
