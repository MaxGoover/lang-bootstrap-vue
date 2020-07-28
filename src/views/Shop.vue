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
            <h1>Shop</h1>

            <div role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="info">
                    Accordion 1
                  </b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  accordion="my-accordion"
                  role="tabpanel">
                  <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is
                      <code>true</code></b-card-text>
                    <b-card-text>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Aspernatur blanditiis cumque
                      dignissimos, eum facilis itaque praesentium quis
                      voluptates? Amet consequuntur deserunt nostrum similique
                      totam. Consequuntur explicabo molestias odit recusandae
                      voluptates!
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="info">
                    Accordion 2
                  </b-button>
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Aspernatur blanditiis cumque
                      dignissimos, eum facilis itaque praesentium quis
                      voluptates? Amet consequuntur deserunt nostrum similique
                      totam. Consequuntur explicabo molestias odit recusandae
                      voluptates!
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Shop'
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