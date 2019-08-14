<template>
  <v-layout class="exercise-list">
    
      
      <!-- <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote> -->
  <nuxt-link :to="`/exercises/${routine.name}`" v-for="routine in exercisesState"
    :key="routine.name">
    <v-card
    
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text"
      height="200px"
      :src="routine.mainImage"
    >
      <v-card-title class="align-end fill-height">{{routine.title}}</v-card-title>
    </v-img>

    <v-card-text class="methods">
      <h4>Methods:</h4>
      <p v-for="method in routine.overview.methods">{{method}}</p><br>      
    </v-card-text>
    <v-card-text class="tools">
      <h4>Tools:</h4>
      <p v-for="tool in routine.overview.tools">{{tool}}</p><br>      
    </v-card-text>

    <!-- <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions> -->
  </v-card>
  </nuxt-link>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import {exercises} from '~/static/exercises.json'

export default {
  // data() {
  //   return {
  //     exercises: {}
  //   }
  // },
  components: {
    Logo,
    VuetifyLogo
  },
  mounted() {
      console.log("exercises", exercises)
  },
  computed: {
    exercisesState: function() {
      return exercises;
      // return "";
    }
  }
}
</script>

<style>
.v-card__title {
  font-size: 1.5rem;
  color: black;
}
.layout.exercise-list {
    display: flex;
    justify-content: space-around;
}
</style>