import { axios } from '../../../axios'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    cartGoods: [],
    groups: [],
    listAddedCartItems:{}
  },
  getters: {
    evenGroups: state => state.groups.filter((e, i) => !(i % 2)),
    oddGroups: state => state.groups.filter((e, i) => i % 2),
  },
  mutations: {
    /**
     * Добавить товар в корзину.
     * @param state
     * @param goods
     */
    addCartItem (state, goods) {
      state.listAddedCartItems[goods.id] = true
      state.cartGoods.push(goods)
    },

    /**
     * Удалить товар из корзины.
     * @param state
     * @param goodsId
     */
    deleteCartItem (state, goodsId) {
      let index = 0
      state.listAddedCartItems[goodsId] = false
      state.cartGoods.find((item, i) => {
        if (item.id === goodsId) {
          index = i
          return true
        }
      })
      state.cartGoods.splice(index, 1)
    },

    /**
     * Изменить группы товаров.
     * @param state
     * @param payload
     */
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
    /**
     * Получить корзину товаров.
     */
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

    /**
     * Получить все группы товаров.
     * @param commit
     */
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
    },

    /**
     * Добавить/удалить товар из корзины.
     * @param state
     * @param commit
     * @param goods
     */
    setCartItem ({ state, commit }, goods) {
      state.listAddedCartItems[goods.id]
        ? commit('deleteCartItem', goods.id)
        : commit('addCartItem', goods)

    }
  }
}
