<template>
  <v-layout>
    <v-flex text-xs-center>
        <h2>{{exercises[0].title}}</h2>
      
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
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
      console.log("exercises", exercises[0].title)

  },
  computed: {
    exercises: function() {
      return exercises;
    }
  }
}
</script>