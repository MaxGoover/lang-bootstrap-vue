<template>
  <div>
    <section>
      <div class="Background"></div>
      <div class="container">
        <div class="row">
          <div class=" d-none d-lg-block col-lg-2">
            on lg and wider screens
          </div>
          <div class="col-md-12 col-lg-10">
            <h1 class="mb-3">Shop</h1>

            <div class="container">
              <div class="row">
                <div
                  v-for="group in groups"
                  :key="group.id"
                  class="col-md-6 mb-2 pl-0"
                >
                  <!--Список товаров катергории-->
                  <div role="tablist">
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
                          <div class="container">
                            <div class="row">

                              <div class="col-6">
                                <div class="row">
                                  <div class="col-10">.col-10</div>
                                  <div class="col-2">24</div>
                                </div>
                              </div>

                              <div class="col-6">
                                <div class="row">
                                  <div class="col-10">.col-10</div>
                                  <div class="col-2">24</div>
                                </div>
                              </div>

                              <div class="col-6">
                                <div class="row">
                                  <div class="col-10">.col-10</div>
                                  <div class="col-2">24</div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </b-card-body>
                      </b-collapse>
                    </b-card>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Shop',
  computed: {
    ...mapState('shop', ['groups'])
  },
  data () {
    return {
      items: [
        { first_name: 'Dickerson', age: 40 }
      ]
    }
  },
  created () {
    this.$store.dispatch('shop/getGroups')
  }
}
</script>

<style scoped>
  .Background {
    background: url('../../public/img/bg_shop.jpg') center no-repeat;
    background-size: cover;
    height: 100%;
    opacity: 0.4;
    position: fixed;
    width: 100%;
  }
</style>