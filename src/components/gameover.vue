<template>
  <div class="">
    <h4> Game over!</h4>
    <h5>The winner is {{game.winner}}</h5>
    <button @click="startNewGame()">Play Again?</button>
  </div>
</template>

<script>
  export default {
    name: 'gameOver',
    data() {
      return {

      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      opponentCard() {
        return this.$store.state.opponentCardId
      },
      playerCard() {
        return this.$store.state.playerCardId
      }

    },
    methods: {
      startNewGame() {
        this.$store.dispatch('startNewGame')
      }
    }
  }

</script>

<style>


</style>