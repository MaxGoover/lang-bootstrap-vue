<template>
  <div class="col-md-6 mb-3 pl-0">
    <div class="card">
      <div class="row no-gutters">
        <div class="col-2 px-3 my-auto">
          <img
            :src="`/img/icons/${ training.avatar }.png`"
            class="card-img" alt="avatar"
          >
        </div>
        <div class="col-10">
          <div class="card-body">
            <h5 class="card-title mb-0">{{ training.title }}</h5>
            <p class="card-text">
              <small class="text-muted">
                {{ training.translation }}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GrammarTrainingsListItem',
    props: {
      training: { type: Object }
    }
  }
</script>

<style scoped>
.col-md-6 {
  height: 88px;
}
.card {
  border-radius: 10px;
}
.card-img {
  height: 64px;
  width: 64px;
}
</style>
