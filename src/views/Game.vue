<template>
  <div class="">
    <opponent></opponent>
    <button v-if="opponentCard && playerCard">Play Now!</button>
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
    methods: {},
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