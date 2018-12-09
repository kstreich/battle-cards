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
      <div class="opponent-hand row d-flex justify-content-around">
        <div v-for="card in hand" class="col-2 ">
          <img v-if="!card.visible" src="../../public/assets/cardback.png" class="hiddenCard" @click="card.visible = true">
          <div class="cardStyle" v-else-if="card.visible">
            <img class="imgSize" :src="card.img">
            <h5>{{card.name}}</h5>
            <p>Attack - {{card.attack}}</p>
            <p>Defense - {{card.defense}}</p>
            <p>Health - {{card.health}}</p>
            <button @click="setOpponentCI(card.id)">Select</button>
          </div>
        </div>
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
        attackObject: "",
      }
    },
    components: {},
    methods: {
      setOpponentCI(cardId) {

        this.$store.dispatch('setOpponentCI', cardId)
      },

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
  .hiddenCard {

    height: 38vh;
    width: 24vh;
    z-index: 1;
    cursor: pointer;
    border: 3px black;
  }
</style>