<script setup lang="ts">
import Nav from './components/Nav.vue';
import Track from './components/Track.vue';
import Player from './components/Player.vue';
import { ref } from 'vue';
import chillHop from './data';

const tracks = ref(chillHop);
const currentTrack = ref(tracks.value[0])
const trackInfo = ref({
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,
  volume: 0
})
const isPlaying = ref(false);
const libraryStatus = ref(false);
const setLibraryStatus = (status: boolean) => {
  libraryStatus.value = status;
}

</script>

<template>
  <div class="App" :class="libraryStatus ? 'library-active' : ''">
    <Nav :libraryStatus="libraryStatus" :setLibraryStatus="setLibraryStatus"/>
    <Track :isPlaying="isPlaying" :currentTrack="currentTrack"/>
    <Player :trackInfo="trackInfo"/>
  </div>
</template>

<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
}
.App {
  transition: all 0.5s ease;
}
.library-active {
  margin-left: 30%;
}

h1 {
  font-size: 1rem;
}
h2 {
  color: rgb(51, 51, 51);
}
h3, h4 {
  color: rgb(100, 100, 100);
  font-weight: 400;
}
</style>
