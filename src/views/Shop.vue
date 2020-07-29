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
                <div class="col-md-6 mb-2 pl-0">
                  <!--Список товаров катергории-->
                  <div role="tablist">
                    <b-card class="mb-1" no-body>
                      <b-card-header class="p-0" role="tab">
                        <b-button
                          block
                          v-b-toggle.accordion-1
                          variant="primary"
                        >
                          Accordion 1
                        </b-button>
                      </b-card-header>
                      <b-collapse id="accordion-1" role="tabpanel">
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

                <div class="col-md-6 mb-2 pl-0">
                  <!--Список товаров катергории-->
                  <div role="tablist">
                    <b-card class="mb-1" no-body>
                      <b-card-header class="p-0" role="tab">
                        <b-button
                          block
                          v-b-toggle.accordion-1
                          variant="primary"
                        >
                          Accordion 1
                        </b-button>
                      </b-card-header>
                      <b-collapse id="accordion-1" role="tabpanel">
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

                <div class="col-md-6 mb-2 pl-0">
                  <!--Список товаров катергории-->
                  <div role="tablist">
                    <b-card class="mb-1" no-body>
                      <b-card-header class="p-0" role="tab">
                        <b-button
                          block
                          v-b-toggle.accordion-1
                          variant="primary"
                        >
                          Accordion 1
                        </b-button>
                      </b-card-header>
                      <b-collapse id="accordion-1" role="tabpanel">
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
export default {
  name: 'Shop',
  data () {
    return {
      items: [
        { first_name: 'Dickerson', age: 40 }
      ]
    }
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