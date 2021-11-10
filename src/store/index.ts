import { createStore } from 'vuex'
import auth from './modules/auth'

export default createStore({
  state: {
    feedback: {
      scrumTest: {
        favorCount: 0,
        visitedCount: 1,
        userCount: 1
      },
      secondScrumTest: {
        favorCount: 0,
        visitedCount: 1,
        userCount: 1
      }
    }
  },
  mutations: {
    updateFeedback (state: any, payload) {
      state.feedback[payload.scrumType][payload.iconType]++
    }
  },
  actions: {},
  modules: {
    auth
  }
})
