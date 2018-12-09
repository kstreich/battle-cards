<template>
  <div v-if="game.id" class="opponent ">
    <div class="container-fluid">
      <div class="row d-flex justify-content-around align-items-end">
        <h6>Remaining Cards: {{game.opponent.remainingCards}}</h6>
        <h4>Opponent: {{game.opponent.name}}</h4>
        <h6>Dead Cards: {{game.opponent.deadCards.length}}</h6>
      </div>
    </div>


    <div class="opponent-hand row d-flex justify-content-around">
      <div v-for="card in hand" class="col-2 ">
        <img v-if="!card.visible" src="../../public/assets/cardback2.png" class="hiddenCard" @click="card.visible = true">

        <div class="cardStyle" v-else-if="card.visible" @click="setOpponentCI(card.id)">
          <img class="imgSize" :src="card.img">
          <h5>{{card.name}}</h5>
          <p><span><img class="iconSize" src="../../public/assets/gun.png"></span> {{card.attack}}</p>
          <p><span><img class="iconSize" src="../../public/assets/security-badge.png"></span>{{card.defense}}</p>
          <p><span><img class="iconSize" src="../../public/assets/heart.png"></span> {{card.health}}</p>
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
    cursor: pointer;
    border: 1px solid white;
    border-radius: 15px;
  }
</style>