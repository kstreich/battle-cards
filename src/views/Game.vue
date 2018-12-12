<template>
  <div class="container-fluid game">
    <div class="gameOver" v-if="game.over">
      <gameOver></gameOver>
    </div>

    <div class="gameOn" v-else-if="!game.over">
      <opponent></opponent>
      <button class="btn btn-primary mt-4 mb-4" @click="attack" v-if="opponentCard && playerCard">Begin Duel</button>
      <player></player>
    </div>
  </div>
</template>
<!-- v-if="opponentCard && playerCard" -->
<script>
  import opponent from '@/components/opponent.vue'
  import player from '@/components/player.vue'
  import gameOver from '@/components/gameover.vue'
  export default {
    name: '',
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
      attack() {
        let cardIds = {
          playerCardId: this.playerCard, opponentCardId: this.opponentCard
        }

        this.$store.dispatch('attack', {
          attackObj: cardIds, gameId: this.game.id
        })
      }
    },
    components: {
      opponent,
      player,
      gameOver
    },
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.gameId)

    }
  }

</script>

<style>
  .game {
    background-image: url('../../public/assets/space.jpg');
    height: 100vh;
    color: white;
  }
</style>