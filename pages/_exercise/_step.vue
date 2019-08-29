<template>
  <div id="exercise-page">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by3">
          <img  alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h2 class="card-header-title">{{ this.$store.state.currentRoutine.title }}</h2>
          
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
console.log('Image', this.$route)
    return {
      exerciseIndex: parseInt(this.$route.params.step),
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>