<template>
  <div>
    <!--Корзина-->
    <b-button v-b-modal.modal-cart variant="outline-light">
      <i
        class="fa fa-shopping-cart navbar-brand"
        aria-hidden="true"
        :title="$t('appHeader.cart')"
      />
    </b-button>

    <!--Модальное окно корзины-->
    <b-modal
      id="modal-cart"
      scrollable
      size="xl"
      title="Корзина"
    >
      <table
        v-if="cartGoods.length"
        class="table mb-0"
      >
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
            v-for="(goods, i) in cartGoods"
            :key="i"
          >
            <td :title="goods.description">{{ goods.title }}</td>
            <td>{{ goods.quantity }}</td>
            <td>{{ goods.price }} / шт.</td>
            <td>
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

      <p v-if="!cartGoods.length">Корзина пуста</p>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapState('shop', ['cartGoods'])
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
  created () {
    this.$store.dispatch('shop/getCart')
  },
  methods: {
    deleteCartItem (goodsId) {
      this.$store.commit('shop/deleteCartItem', goodsId)
    }
  }
}
</script>

<style scoped>

</style>