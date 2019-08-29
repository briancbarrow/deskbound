<template>
  <div class="container">
      <div class="text-xs-center">
        <logo />
      </div>
      <div class="card is-primary">
        <div class="card-header">
          <h2 class="card-header-title">Deskbound Mobility Exercises</h2>
        </div>
        <div class="card-content">
          <div class="list is-hoverable">
              <div>
                  <nuxt-link class="list-item" v-for="(exercise, index) in exercises" :name="exercise.name" :key="index" :to="exercise.name">{{ exercise.title }}</nuxt-link>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue';
import {exercises} from '~/static/exercises.json';
import { mapMutations } from 'vuex';

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      exercises
    }
  },
  methods: {
    ...mapMutations([
      'changeRoutine',
    ]),
 
  },
  watch:{
    $route (to, from){
      console.log("TO", to)
        this.changeRoutine(to);
    }
  } 
}
</script>

<style lang="scss" scoped>
.list-item:hover {
    background-color: $deskbound-lightgray;
}
</style>