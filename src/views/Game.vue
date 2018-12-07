<template>
  <div class="">
    <h1> This is the game view</h1>
    {{game}}
  </div>
</template>

<script>
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

    },
    mounted() {
      this.$store.dispatch('getGames', this.$route.params.gameId)
    }
  }

</script>

<style>


</style>