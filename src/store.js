import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

let gameApi = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games'
})

export default new Vuex.Store({
  state: {
    game: {},
  },
  mutations: {
    setGame(state, game) {
      state.game = game
    }
  },
  actions: {

    getGames({ commit }, gameId) {
      gameApi.get('' + gameId)
        .then(res => {
          console.log("games:", res.data)
          commit('setGame', res.data)
        })
    },
    startGame({ commit }, gameConfig) {
      gameApi.post('')
        .then(res => {
          commit('setGame', res.data)

        })
    }

  }
})
