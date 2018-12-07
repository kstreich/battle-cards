<template>
  <div class="">
    <opponent></opponent>
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