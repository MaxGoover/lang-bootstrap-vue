<template>
  <div class="col-md-6 pl-0">
    <div
      v-for="group in groups"
      :key="group.id"
      class="mr-2"
      role="tablist"
    >
      <b-card class="mb-1" no-body>

        <!--Группа товаров-->
        <b-card-header class="p-0" role="tab">
          <b-button
            block
            v-b-toggle="'accordion-' + group.id"
            variant="primary"
          >
            {{ group.title }}
          </b-button>
        </b-card-header>

        <!--Список товаров-->
        <b-collapse
          :id="'accordion-' + group.id"
          role="tabpanel"
        >
          <b-card-body class="p-0">
            <table class="table mb-0">
              <tbody>
                <tr
                  v-for="goods in group.goods"
                  :key="goods.id"
                  class="Goods"
                  :class="listAddedCartItems[goods.id] ? 'table-warning' : ''"
                  @click="setCartItem(goods)"
                >
                  <td class="p-2 GoodsTitle">
                    {{ goods.title }}({{ goods.quantity }})
                  </td>
                  <td class="table-active GoodsPrice">
                    {{ goods.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShopGroupsListColumn',
  props: {
    groups: {
      default: () => [],
      type: Array
    }
  },
  computed: {
    ...mapState('shop', ['listAddedCartItems'])
  },
  methods: {
    setCartItem (goods) {
      this.$store.commit('shop/setCartItem', goods)
    }
  }
}
</script>

<style scoped>
@import '../../assets/shop/ShopGroupsListColumn.css';
</style>