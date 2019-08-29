import Vuex from 'vuex'
import Vue from 'vue'

import {exercises} from '~/static/exercises.json'
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   },
//   actions: {
//     increment (context) {
//       context.commit('increment')
//     }
//   }
// })
// Vue.use(Vuex)
// const store = new Vuex.Store({
// // state {
// //     currentRoutine: {},
// //     exercises: exercises
// // },
// mutations: {
//     changeRoutine(state, payload) {
//         state.currentRoutine = payload.routine;
//     }
// },
// // getters: {
// //     // getCurrentRoutine: state => state.currentRoutine
// // },
// actions: {
//     updateRoutine (routine) {
//         context.commit('changeRoutine', {routine})
//     }
// }
export const state = () => ({
    currentRoutine: {},
    exercises: exercises
})
export const mutations = {
  changeRoutine(state, payload) {
    state.currentRoutine = state.exercises[payload.routine];
    }
}
// export const getters = {
//     getCurrentRoutine: state => state.currentRoutine
// }
export const actions = {
  updateRoutine (context, routine) {
    context.commit('changeRoutine', {routine})
    }
}
// })

// export default store;
//   export const store = new Vuex.Store({
//     state: {
//       flavor: ''
//     },
//     mutations: {
//       change(state, flavor) {
//         state.flavor = flavor
//       }
//     },
//     getters: {
//       flavor: state => state.flavor
//     }
//   })