<script setup lang="ts">
import { ref } from 'vue';
import chillHop from './data';
import Nav from './components/Nav.vue';
import Library from './components/Library.vue';
import type TrackType from './types/TrackType';

const audioRef: any = ref(null);

const tracks = ref<TrackType[]>(chillHop);
const setTracks = (newTracks: TrackType[]) => {
  tracks.value = newTracks;
}
const currentTrack = ref<TrackType>(tracks.value[0])
const setCurrentTrack = (track: TrackType) => {
  currentTrack.value = track;
}
const isPlaying = ref(false);
const setIsPlaying = (play: boolean) => {
  isPlaying.value = play;
}
const libraryStatus = ref(false);
const setLibraryStatus = (status: boolean) => {
  libraryStatus.value = status;
}
</script>

<template>
  <div class="App" :class="libraryStatus ? 'library-active' : ''">
    <Nav :libraryStatus="libraryStatus" :setLibraryStatus="setLibraryStatus"/>
    <div class="track-container">
        <img :class="isPlaying ? 'rotateTrack' : ''" :src="currentTrack?.cover" alt="track cover">
        <h2>{{ currentTrack?.name }}</h2>
        <h3>{{ currentTrack?.artist }}</h3>
    </div>
    <div class="player">
      <audio
        controls
        ref="audioRef"
        :src="currentTrack?.audio"
        @play="setIsPlaying(true)"
        @pause="setIsPlaying(false)"
      />
    </div>
    <Library 
      :tracks="tracks"
      :currentTrack="currentTrack"
      :setCurrentTrack="setCurrentTrack"
      :isPlaying="isPlaying"
      :setTracks="setTracks"
      :libraryStatus="libraryStatus"
      :audioRef="audioRef"
    />
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
.player {
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.track {
  /* background: linear-gradient(to right, #205950, #2ab3bf); */
}
/* .animate-track {
  background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  padding: 1rem;
  pointer-events: none;
} */

input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
}

.library-active {
  margin-left: 30%;
}
.track-container {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
    width: 25%;
    border-radius: 50%;
    transition: all 2s ease;
  }
  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
  }
@media screen and (max-width: 768px) {
    img {
      width: 60%;
    }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotateTrack {
  animation: rotate 20s linear forwards infinite;
}
</style>
