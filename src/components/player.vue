<template>
  <div v-if="game.id" class="player">
    <div class="container-fluid">
      <div class="row d-flex justify-content-around align-items-end ">
        <h6>Remaining Cards: {{game.player.remainingCards}} </h6>
        <h4>Player: {{game.player.name}}</h4>
        <h6>Dead Cards: {{game.player.deadCards.length}}</h6>
      </div>
    </div>
    <!-- <div class="row d-flex justify-content-around">
        <div class="col-2 " v-for="card in hand">
          <img class="card-img-top" :src="card.img">
          <p>{{card.name}}</p>
          <p>Attack - {{card.attack}}</p>
          <p>Defense - {{card.defense}}</p>
          <p>Health - {{card.health}}</p>
          <button @click="setPlayerCI(card.id)">Select</button>
        </div>
      </div> -->
    <div class="row d-flex justify-content-around">
      <div v-for="card in hand" class="cardStyle col-2" @click="setPlayerCI(card.id)">
        <img class=" imgSize" :src="card.img" />
        <h5>{{card.name}}</h5>
        <p><span><img class="iconSize" src="../../public/assets/gun.png"></span> {{card.attack}} </p>
        <p><span><img class="iconSize" src="../../public/assets/security-badge.png"></span>
          {{card.defense}}</p>
        <p><span><img class="iconSize" src="../../public/assets/heart.png"></span> {{card.health}} </p>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'player',
    data() {
      return {
        playerCardId: ""
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      hand() {
        return this.$store.state.game.player.hand
      }
    },
    methods: {
      setPlayerCI(cardId) {
        this.$store.dispatch('setPlayerCI', cardId)
      }
    }
  }

</script>

<style>
  .cardStyle {
    height: 38vh;
    width: 24vh;
    cursor: pointer;
    text-align: center;
    word-wrap: break-word;
    border: 4px black solid;
    border-radius: 15px;
    line-height: 8px;
    background-color: aquamarine;
  }

  .imgSize {
    height: 16vh;
    margin-bottom: 15px;
  }

  .iconSize {
    height: 3vh;
  }

  p {
    margin-bottom: 4px;
  }
</style>