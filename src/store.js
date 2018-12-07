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

    getGame({ commit }, gameId) {
      gameApi.get('' + gameId)
        .then(res => {
          console.log("game:", res.data)
          commit('setGame', res.data)
        })
    },
    createGame({ commit }, gameConfig) {
      gameApi.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data)
          console.log('game data: ', res.data.game)
          router.push({ name: "game", params: { gameId: res.data.game.id } })
        })
    }

  }
})
