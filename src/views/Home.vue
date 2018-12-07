<template>
  <div class="home">
    <h1>Battle Cards</h1>
    <form>
      Enter Player Name<input type="text" v-model="gameConfig.playerName">
      <button>Add</button>
    </form>
    <h3>Choose Card Deck</h3>

    <input type="radio" id="one" value="1" v-model="gameConfig.picked">
    <label for="one"> One</label>

    <input type="radio" id="two" value="2" v-model="gameConfig.picked">
    <label for="two"> Two</label>

    <input type="radio" id="three" value="3" v-model="gameConfig.picked">
    <label for="three"> Three</label>

    <input type="radio" id="four" value="4" v-model="gameConfig.picked">
    <label for="four"> Four</label>
    {{gameConfig.picked}}

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
          picked: ''
        },
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>