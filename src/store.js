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
    opponentCardId: "",
    playerCardId: ""

  },
  mutations: {
    setGame(state, game) {
      state.game = game
    },
    setPCI(state, cardId) {
      state.playerCardId = cardId
    },
    setOCI(state, cardId) {
      state.opponentCardId = cardId
    }
  },
  actions: {

    getGame({ commit }, gameId) {
      gameApi.get('' + gameId)
        .then(res => {
          console.log("game:", res.data)
          commit('setGame', res.data.data)
        })
        .catch(err => {
          console.log('Cannot get games')
        })
    },
    createGame({ commit }, gameConfig) {
      gameApi.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data.game)
          console.log('game data: ', res.data.game)
          router.push({ name: "game", params: { gameId: res.data.game.id } })
        })
        .catch(err => {
          console.log('Cannot create game')
        })
    },
    startGame({ commit }, cardIds) {
      gameApi.put('', cardIds)
        .then(res => {
          console.log('updated game data: ', res.data)
          commit('setGame', res.data.game)
        })
        .catch(err => {
          console.log('Cannot start game')
        })
    },
    setPlayerCI({ commit }, cardId) {
      commit('setPCI', cardId)
    },
    setOpponentCI({ commit }, cardId) {
      commit('setOCI', cardId)
    },
    attack({ commit, dispatch }, payload) {
      gameApi.put("" + payload.gameId, payload.cardIds)
        .then(res => {
          console.log(res.data)
          dispatch('getGame')
        })
    }

  }
})
