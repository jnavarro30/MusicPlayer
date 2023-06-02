<script setup lang="ts">
import Nav from './components/Nav.vue';
import Track from './components/Track.vue';
import Player from './components/Player.vue';
import Library from './components/Library.vue';
import { ref } from 'vue';
import chillHop from './data';
import type TrackType from './types/TrackType';
import type TrackInfoType from './types/TrackInfoType';
import { playAudio } from './utils/playAudio';

const audioRef = ref();
const tracks = ref(chillHop);
const setTracks = (newTracks: TrackType[]) => {
  tracks.value = newTracks;
}
const currentTrack = ref(tracks.value[0])
const setCurrentTrack = (track: TrackType) => {
  currentTrack.value = track;
}
const trackInfo = ref({
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,
  volume: 0
})
const setTrackInfo = (info: TrackInfoType) => {
  trackInfo.value = info;
}
const isPlaying = ref(false);
const setIsPlaying = (play: boolean) => {
  isPlaying.value = play;
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

  const trackEndHandler = async () => {
    let currentIndex = tracks.findIndex((track) => track.id === currentTrack.value.id);
    console.log(currentIndex, 'the index')
    setCurrentTrack(tracks[(currentIndex + 1) % tracks.length]);
    playAudio(isPlaying, audioRef);
    return;
  };

</script>

<template>
  <div class="App" :class="libraryStatus ? 'library-active' : ''">
    <Nav :libraryStatus="libraryStatus" :setLibraryStatus="setLibraryStatus"/>
    <Track :isPlaying="isPlaying" :currentTrack="currentTrack"/>
    <Player 
      :trackInfo="trackInfo"
      :setTrackInfo="setTrackInfo"
      :isPlaying="isPlaying"
      :setIsPlaying="setIsPlaying"
      :currentTrack="currentTrack"
      :setCurrentTrack="setCurrentTrack"
      :tracks="tracks"
      :setTracks="setTracks"
    />
    <Library 
      :tracks="tracks"
      :setCurrentTrack="setCurrentTrack"
      :audioRef="audioRef"
      :isPlaying="isPlaying"
      :setTracks="setTracks"
      :libraryStatus="libraryStatus"
    />
    <audio
      ref="audio" 
      :src="currentTrack.audio"
      :on-loadedmetadata="timeUpdateHandler"
      :on-timeupdate="timeUpdateHandler"
      :on-ended="trackEndHandler"
    >
  </audio>
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
