<template>
  <div id="app">
    <!-- <img src="./assets/images/logo.png"> -->
    <router-view/>
    <!-- <fristComponent></fristComponent> -->
  </div>
</template>

<script>
import fristComponent from './components/fristCompontent'
export default {
  name: 'App',
  components: {
    'fristComponent': fristComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
*{
  padding: 0;
  margin: 0;
}
</style>
