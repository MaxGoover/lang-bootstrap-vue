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
            <div
              v-if="goods.quantity === goods.inStock"
              class="LimitQuantity"
            >
              Количество ограничено
            </div>
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
        <tr>
          <td
            class="text-muted w-75"
            colspan="2"
          >
            <input
              :value="dollarRate"
              min="20"
              max="80"
              type="number"
              @input="setDollarRate"
            /> Стоимость доллара в рублях
          </td>
          <td
            align="right"
            class="text-muted w-25"
            colspan="2"
          >
            Общая стоимость:
            <span
              class="font-weight-bold"
              style="color: #b06006;"
            >
              {{ cartItemsCost }} руб.</span>
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
    ...mapState('shop', [
      'cartItems',
      'cartItemsCost',
      'dollarRate'
    ])
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
      this.$store.dispatch('shop/deleteCartItem', goodsId)
    },
    setDollarRate (event) {
      this.$store.dispatch('shop/setDollarRate', Number(event.target.value))
    },
    setQuantityCartItem (goodsId, event) {
      this.$store.dispatch('shop/setQuantityCartItem', {
        goodsId,
        quantity: Number(event.target.value)
      })
    }
  }
}
</script>

<style scoped>
@import '../../../assets/shop/CartContent.css';
</style>