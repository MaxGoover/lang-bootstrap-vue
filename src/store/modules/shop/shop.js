import { axios } from "../../../axios";

export default {
  namespaced: true,
  state: {
    cart: [],
    groups: []
  },
  getters: {
    evenGroups: state => state.groups.filter((e, i) => !(i % 2)),
    oddGroups: state => state.groups.filter((e, i) => i % 2),
  },
  mutations: {
    setCart (state, payload) {
      state.cart = payload
    },
    setGroups (state, payload) {
      state.groups = payload
    }
  },
  actions: {
    getCart ({ commit }) {
      this.commit('app/startLoading')
      axios.post('shop/cart/index')
        .then(
          response => {
            console.log(1, response.data)
            commit('setCart', response.data)
          },
          reject => {
            console.log(2, reject.response)
          })
        .catch(error => {
          console.log(3, error)
        })
        .finally(() => {
          this.commit('app/stopLoading')
        })
    },
    getGroups ({ commit }) {
      this.commit('app/startLoading')
      axios.post('shop/group/index')
        .then(
          response => {
            console.log(1, response.data)
            commit('setGroups', response.data)
          },
          reject => {
            console.log(2, reject.response)
          })
        .catch(error => {
          console.log(3, error)
        })
        .finally(() => {
          this.commit('app/stopLoading')
        })
    }
  }
}
