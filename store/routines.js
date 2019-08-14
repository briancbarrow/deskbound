// import Vuex from 'vuex'
// import Vue from 'vue'

import {exercises} from '~/static/exercises.json'

// Vue.use(Vuex)
// const store = new Vuex.Store({
export const state = () => ({
    currentRoutine: {}
})
export const mutations = {
    changeRoutine(routineName) {
        state.currentRoutine = exercises[routineName]
    }
}
export const getters = {
    getModalStatus: state => state.isModalVisible
}
export const actions = {
    hideModal (context) {
        context.commit('hide')
    },
    showGif(context) {
        context.commit('showGif')
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