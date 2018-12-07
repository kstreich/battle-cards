<template>
  <div class="home">
    <h1>Battle Cards</h1>
    <form @submit.prevent="createGame">
      <label for="playerName">Enter Player Name</label>
      <input name="playerName" type="text" v-model="gameConfig.playerName">
      <h3>Choose Card Deck</h3>

      <input type="radio" id="one" value="1" v-model="gameConfig.set">
      <label for="one"> One</label>

      <input type="radio" id="two" value="2" v-model="gameConfig.set">
      <label for="two"> Two</label>

      <input type="radio" id="three" value="3" v-model="gameConfig.set">
      <label for="three"> Three</label>

      <input type="radio" id="four" value="4" v-model="gameConfig.set">
      <label for="four"> Four</label>
      <button type="submit">Add</button>
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