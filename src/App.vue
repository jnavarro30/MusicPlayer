<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Nav from './components/Nav.vue';
import Track from './components/Track.vue';
import { ref } from 'vue';
import chillHop from './data.js';
import TrackType from './types/TrackType';
import TrackInfoType from './types/TrackInfoType';
import { playAudio } from './utils/playAudio';

const audioRef = ref(null);
const tracks = ref(chillHop());
const setTracks = (newTracks: []) => {
  tracks.value = newTracks;
}
const currentTrack = ref<TrackType>(tracks.value[0]);
const setCurrentTrack = (track: TrackType) => {
  currentTrack.value = track;
}
console.log(currentTrack.value, 'slkfhdks')

const isPlaying = ref(false);
const setIsPlaying = (playing: boolean) => {
  isPlaying.value = playing;
}

const trackInfo = ref({});
const setTrackInfo = (info: TrackInfoType) => {
  trackInfo.value = info;
}

const libraryStatus = ref(false);
const setLibraryStatus = (status: boolean) => {
  libraryStatus.value = status;
}

const timeUpdateHandler = (e: any) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setTrackInfo({
      ...trackInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
    await setCurrentTrack(tracks[(currentIndex + 1) % tracks.length]);
    playAudio(isPlaying, audioRef);
    return;
  };

</script>

<template>
  <div class="App" :class="libraryStatus ? 'library-active' : ''">
    <h1>Music Player</h1>
    <Nav :libraryStatus="libraryStatus" :setLibraryStatus="setLibraryStatus"/>
    <Track :isPlaying="isPlaying" :currentTrack="currentTrack"/>
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
