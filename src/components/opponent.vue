<template>
  <div class="opponent">
    <h1>The opponent object</h1>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <h4>Opponent: {{game.opponent.name}}</h4>
      </div>
      <div class="row d-flex justify-content-around">
        <div class="col-2 card" v-for="card in hand">
          <img class="card-img-top" :src="card.img">
          <p>{{card.name}}</p>
          <p>Attack - {{card.attack}}</p>
          <p>Defense - {{card.defense}}</p>
          <p>Health - {{card.health}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'opponent',
    data() {
      return {

      }
    },
    components: {},
    methods: {},
    computed: {
      game() {
        return this.$store.state.game.data
      },
      hand() {
        return this.$store.state.game.data.opponent.hand
      }
    }
  }

</script>

<style>


</style>