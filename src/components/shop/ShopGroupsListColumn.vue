<template>
  <div class="col-md-6 mb-3 pl-0">
    <div
      v-for="group in groups"
      :key="group.id"
      class="mr-2"
      role="tablist"
    >
      <b-card class="mb-1" no-body>
        <b-card-header class="p-0" role="tab">
          <b-button
            block
            v-b-toggle="'accordion-' + group.id"
            variant="primary"
          >
            {{ group.title }}
          </b-button>
        </b-card-header>
        <b-collapse
          :id="'accordion-' + group.id"
          role="tabpanel"
        >
          <b-card-body class="p-0">
            <table class="table table-hover mb-0">
              <tbody>
              <tr
                v-for="goods in group.goods"
                :key="goods.id"
              >
                <td class="p-2" style="width: 75%">
                  {{ goods.title }}({{ goods.quantity }})
                </td>
                <td style="width: 25%; text-align: center; background-color: aliceblue; vertical-align: center; font-weight: 600;">
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
export default {
  name: 'ShopGroupsListColumn',
  props: {
    groups: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>