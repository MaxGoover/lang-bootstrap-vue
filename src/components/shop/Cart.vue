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
        v-if="cart.length"
        class="table table-hover mb-0"
      >
        <thead>
          <tr>
            <th
              v-for="(value, i) in tableHead"
              :key="i"
              class="font-weight-normal text-muted"
            >
              {{ value }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(cartItem, i) in cart"
            :key="i"
          >
            <td :title="cartItem.description">{{ cartItem.title }}</td>
            <td>{{ cartItem.quantity }}</td>
            <td>{{ cartItem.price }} / шт.</td>
            <td>
              <button type="button" class="btn btn-light">
                {{ $t('cart.table.delete') }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapState('shop', ['cart'])
  },
  data () {
    return {
      tableHead: [
        this.$i18n.t('cart.table.title'),
        this.$i18n.t('cart.table.quantity'),
        this.$i18n.t('cart.table.price'),
        ''
      ]
    }
  },
  created() {
    this.$store.dispatch('shop/getCart')
  }
}
</script>

<style scoped>

</style>