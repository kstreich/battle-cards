<template>
  <div class="home container-fluid">
    <h1 class="headerSize">Space Adventure Battle Cards</h1>

    <form @submit.prevent="createGame" class="spacing">
      <label for="playerName"> Enter Player Name </label>
      <input name="playerName" type="text" v-model="gameConfig.playerName">

      <h3 class="spacing">Choose Card Deck</h3>
      <div class="row">
        <div class="col 3">
          <img class="homeImg" src="https://robohash.org/c47837d6-e937-4ca5-bac3-9b0f050e8e61?set=set1">
          <input type="radio" id="one" value="1" v-model="gameConfig.set">
          <label for="one">
            <h6> One</h6>
          </label>
        </div>
        <div class="col 3">
          <img class="homeImg" src="https://robohash.org/c22eb7d8-9df5-450d-873a-5c91385b3527?set=set2">
          <input type="radio" id="two" value="2" v-model="gameConfig.set">
          <label for="two">
            <h6> Two</h6>
          </label>
        </div>
        <div class="col 3">
          <img class="homeImg" src="https://robohash.org/cf7941a2-946f-4358-b283-a09dacfd64d0?set=set3">
          <input type="radio" id="three" value="3" v-model="gameConfig.set">
          <label for="three">
            <h6> Three</h6>
          </label>
        </div>
        <div class="col 3">
          <img class="homeImg" src="https://robohash.org/bf803252-6267-468c-9636-e68af55bf303?set=set4">
          <input type="radio" id="four" value="4" v-model="gameConfig.set">
          <label for="four">
            <h6> Four</h6>
          </label>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">START</button>
    </form>

  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'home',
    data() {
      return {
        gameConfig: {
          playerName: '',
          set: ''
        },
      }
    },
    methods: {
      createGame() {
        this.$store.dispatch('createGame', this.gameConfig)
      }
    },
    components: {

    }
  }
</script>

<style>
  .home {
    background-image: url('../../public/assets/space.jpg');
    height: 94vh;
    color: white;
  }

  .homeImg {
    height: 20vh;
  }

  .spacing {
    margin-top: 10vh
  }

  .headerSize {
    font-size: 4rem
  }
</style>