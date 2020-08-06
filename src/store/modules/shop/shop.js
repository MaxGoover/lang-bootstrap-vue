import { axios } from '../../../axios'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    cart: [],
    groups: [],
    listAddedCartItems:{}
  },
  getters: {
    evenGroups: state => state.groups.filter((e, i) => !(i % 2)),
    oddGroups: state => state.groups.filter((e, i) => i % 2),
  },
  mutations: {
    // setCart (state, payload) {
    //   state.cart = payload
    // },
    setCartItem (state, goods) {
      if (state.listAddedCartItems[goods.id]) {
        let index = 0
        state.listAddedCartItems[goods.id] = false
        state.cart.find((item, i) => {
          if (item.id === goods.id) {
            index = i
            return true
          }
        })
        state.cart.splice(index, 1)
      } else {
        state.listAddedCartItems[goods.id] = true
        state.cart.push(goods)
      }

    },
    setGroups (state, payload) {
      state.groups = payload
      payload.map(group => {
        group.goods.map(goods => {
          Vue.set(state.listAddedCartItems, goods.id, false)
        })
      })
    }
  },
  actions: {
    getCart () {
      this.commit('app/startLoading')
      axios.post('shop/cart/index')
        .then(
          response => {
            console.log(1, response.data)
            // commit('setCart', response.data)
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
    // setCartItem ({ commit }, payload) {
    //   commit('setCartItem', payload)
    // }
  }
}
