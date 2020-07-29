import { axios } from "../../../axios";
import TrainingHelper from "../../../helpers/TrainingHelper";

export default {
  namespaced: true,
  state: {
    data: {}
  },
  getters: {},
  mutations: {

  },
  actions: {
    getGroupsGoods ({ commit }) {
      this.commit('app/startLoading')
      axios.post('grammar/training/index', {
        alias: payload,
        conditions: TrainingHelper[payload]
      })
        .then(
          response => {
            console.log(1, response.data)
            commit('setExercises', response.data.exercises.query)
            commit('setTraining', response.data.training)
          },
          reject => { console.log(2, reject.response) })
        .catch(error => { console.log(3, error) })
        .finally(() => { this.commit('app/stopLoading') })
    }
  }
}
