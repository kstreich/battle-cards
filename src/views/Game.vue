<template>
  <div class="">
    <opponent></opponent>
    <button @click="attack" v-if="opponentCard && playerCard">Play Now!</button>
    <player></player>
  </div>
</template>

<script>
  import opponent from '@/components/opponent.vue'
  import player from '@/components/player.vue'
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
          playerCardId: this.playerCard, opponentCardId: this.opponentCardId
        }
        this.$store.dispatch('attack', {
          attackObj: cardIds, gameId: this.game.gameId
        })
      }
    },
    components: {
      opponent,
      player
    },
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.gameId)

    }
  }

</script>

<style>


</style>