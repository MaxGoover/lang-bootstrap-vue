<template>
  <footer>
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav">
              <li class="nav-item">
                <span class="nav-link">&copy; 2022 Theme by psdfreebis.com</span>
              </li>
              <li class="nav-item"><a href="#" class="nav-link">Privacy</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Terms of Use</a>
              </li>
              <li class="nav-item"><a href="#" class="nav-link">Site Map</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="void"></div>
  </footer>

<!--  <v-footer app fixed>-->
<!--    &copy; 2020-->
<!--    <v-spacer/>Written with-->
<!--    <v-icon color="red">mdi-heart</v-icon>by Maxim Zaharov-->
<!--  </v-footer>-->
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.copyright {
  background-color: #fff;
  bottom: 0;
  position: fixed;
  width: 100%;
}
.void {
  height: 40px;
}
</style>
