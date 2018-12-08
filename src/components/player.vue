<template>
  <div v-if="game.id" class="player">
    <h1>The player object</h1>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <h4>Player: {{game.player.name}}</h4>
      </div>
      <div class="row d-flex justify-content-around">
        <div class="col-2 card" v-for="card in hand">
          <img class="card-img-top" :src="card.img">
          <p>{{card.name}}</p>
          <p>Attack - {{card.attack}}</p>
          <p>Defense - {{card.defense}}</p>
          <p>Health - {{card.health}}</p>
          <button @click="setPlayerCI(card.id)">Select</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {
        playerCardId: ""
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      hand() {
        return this.$store.state.game.player.hand
      }
    },
    methods: {
      setPlayerCI(cardId) {
        this.$store.dispatch('setPlayerCI', cardId)
      }
    }
  }

</script>

<style>


</style>