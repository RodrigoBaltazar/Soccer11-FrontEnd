<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    <MidiaPlayer />
  </div>
</template>

<script>
import MidiaPlayer from './components/MidiaPlayer.vue'

export default {
  name: 'App',
  components: {
    MidiaPlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
