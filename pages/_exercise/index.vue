<template>
  <div id="exercise-page">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by3">
          <img :src="this.$store.state.currentRoutine.mainImage" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h2 class="card-header-title">{{ this.$store.state.currentRoutine.title }}</h2>
          <div class="methods">
            <h3>Methods:</h3>
            <div class="list">
              <p class="list-item" v-for="method in this.$store.state.currentRoutine.overview.methods">{{ method }}</p>
            </div>
          </div>
          <div class="tools">
            <h3>Tools:</h3>
            <div class="list">
              <p class="list-item" v-for="tool in this.$store.state.currentRoutine.overview.tools">{{ tool }}</p>
            </div>
          </div>
          <br>
          
          <div class="estimated-time"><strong>Estimated Time:</strong> {{ this.$store.state.currentRoutine.overview.estTime }} minutes</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapActions } from 'vuex'

export default {
  data() {
    // return {
    //   exerciseIndex: 0,
    // }
  },
  components: {
    Logo,
    VuetifyLogo
  },
  created() {
    console.log(this.$store.state.currentRoutine)
    this.updateRoutine(this.$route.params.exercise)
    this.exerciseIndex = 0;
  },
  computed: {   
    // currentRoutine: function() {
    //   return this.$store.state.currentRoutine
    // }
  },
  methods: {
    ...mapActions(['updateRoutine'])
  },  
  // watch:{
  //   $route (to, from){
  //     console.log("TO _exercise", to)
  //       // this.changeRoutine(to);
  //   }
  // } 
}
</script>

<style scoped>
.v-card__title {
  font-size: 1.5rem;
  color: black;
}
.layout.exercise-list {
    display: flex;
    justify-content: space-around;
}
.card {
  max-width: 350px;
  margin: auto;
}
h2.card-header-title {
  padding-left: 0;
}
p.list-item {
  margin-bottom: 0;
}
.tools {
    margin-top: 20px;
}
.card-content {
    padding-top: 0;
}
</style>