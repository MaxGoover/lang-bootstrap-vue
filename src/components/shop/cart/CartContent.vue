<template>
  <b-container>
    <table class="table mb-0">
      <thead>
        <tr>
          <th
            v-for="(value, i) in tableHeader"
            :key="i"
            class="font-weight-normal text-muted"
          >
            {{ value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(goods, j) in cartItems"
          :key="j"
        >
          <td :title="goods.description">{{ goods.title }}</td>
          <td class="w-15">
            <input
              :value="goods.quantity"
              class="Quantity"
              min="1"
              type="number"
              :max="goods.inStock"
              @input="setQuantityCartItem(goods.id, ...arguments)"
            /> шт.
          </td>
          <td class="w-20">{{ goods.price }} / шт.</td>
          <td class="w-10">
            <button
              class="btn btn-light"
              type="button"
              @click="deleteCartItem(goods.id)"
            >
              {{ $t('cart.table.delete') }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CartContent',
  computed: {
    ...mapState('shop', ['cartItems'])
  },
  data () {
    return {
      tableHeader: [
        this.$i18n.t('cart.table.title'),
        this.$i18n.t('cart.table.quantity'),
        this.$i18n.t('cart.table.price'),
        ''
      ]
    }
  },
  methods: {
    deleteCartItem (goodsId) {
      this.$store.commit('shop/deleteCartItem', goodsId)
    },
    setQuantityCartItem (goodsId, event) {
      this.$store.commit('shop/setQuantityCartItem', {
        goodsId,
        quantity: event.target.value
      })
    }
  }
}
</script>

<style scoped>
@import '../../../assets/shop/CartContent.css';
</style>