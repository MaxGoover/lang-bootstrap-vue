import { axios } from '../../../axios'
import CartItem from '../../../entities/CartItem'
import Notification from '../../../entities/Notification'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    cartItems: [],
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
      state.cartItems.push(new CartItem(goods))
      const notification = new Notification('success', 'addedCartItem')
      notification.showSuccess()
    },

    /**
     * Удалить товар из корзины.
     * @param state
     * @param goodsId
     */
    deleteCartItem (state, goodsId) {
      let index = 0
      state.listAddedCartItems[goodsId] = false
      state.cartItems.find((item, i) => {
        if (item.id === goodsId) {
          index = i
          return true
        }
      })
      state.cartItems.splice(index, 1)
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
    },

    setQuantityCartItem (state, payload) {
      state.cartItems.find(item => {
        if (item.id === payload.goodsId) {
          item.quantity = payload.quantity
          return true
        }
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
