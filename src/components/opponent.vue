<template>
  <div v-if="game.id" class="opponent">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <h4>Opponent: {{game.opponent.name}}</h4>
      </div>
      <div class="row d-flex justify-content-center">
        <h5>Remaining Cards: {{game.opponent.remainingCards}} -</h5>
        <h5> - Dead Cards: {{game.opponent.deadCards.length}}</h5>
      </div>
      <div class="row d-flex justify-content-around">
        <div class="col-2 card" v-for="card in hand">
          <img class="card-img-top" :src="card.img">
          <p>{{card.name}}</p>
          <p>Attack - {{card.attack}}</p>
          <p>Defense - {{card.defense}}</p>
          <p>Health - {{card.health}}</p>
          <button v-bind:class="{activebtn: attackObject}
            " @click="setOpponentCI(card.id)">Select</button>
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
        attackObject: ""
      }
    },
    components: {},
    methods: {
      setOpponentCI(cardId) {
        this.$store.dispatch('setOpponentCI', cardId)
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      hand() {
        return this.$store.state.game.opponent.hand
      }
    }
  }

</script>

<style>
  .activebtn {
    color: red;
  }
</style>