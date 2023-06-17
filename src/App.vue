<script setup lang="ts">
import { ref } from "vue";
import chillHop from "./data";
import Nav from "./components/Nav.vue";
import Library from "./components/Library.vue";
import type TrackType from "./types/TrackType";

const audioRef: any = ref(null);

const tracks = ref<TrackType[]>(chillHop);
const setTracks = (newTracks: TrackType[]) => {
  tracks.value = newTracks;
};
const currentTrack = ref<TrackType>(tracks.value[0]);
const setCurrentTrack = (track: TrackType) => {
  currentTrack.value = track;
};
const isPlaying = ref(false);
const setIsPlaying = (play: boolean) => {
  isPlaying.value = play;
};
const libraryStatus = ref(false);
const setLibraryStatus = (status: boolean) => {
  libraryStatus.value = status;
};

const darkView = ref(false);
const setDarkView = (view: boolean) => {
  darkView.value = view;
};
</script>

<template>
  <div class="App" :class="{ libraryActive: libraryStatus, dark: darkView }">
    <Nav
      :libraryStatus="libraryStatus"
      :setLibraryStatus="setLibraryStatus"
      :darkView="darkView"
      :setDarkView="setDarkView"
      :isPlaying="isPlaying"
    />
    <div class="track-container" :class="{ hidden: libraryStatus }">
      <img
        :class="isPlaying ? 'rotateTrack' : ''"
        :src="currentTrack?.cover"
        alt="track cover"
      />
      <h2>{{ currentTrack?.name }}</h2>
      <h3>{{ currentTrack?.artist }}</h3>
      <!-- <div class="player">
      <audio
        controls
        ref="audioRef"
        :src="currentTrack?.audio"
        @play="setIsPlaying(true)"
        @pause="setIsPlaying(false)"
      />
    </div> -->
    </div>
    <Library
      :tracks="tracks"
      :currentTrack="currentTrack"
      :setCurrentTrack="setCurrentTrack"
      :isPlaying="isPlaying"
      :setIsPlaying="setIsPlaying"
      :setTracks="setTracks"
      :libraryStatus="libraryStatus"
      :audioRef="audioRef"
      :darkView="darkView"
    />
  </div>
  <footer class="player">
    <audio
        controls
        ref="audioRef"
        :src="currentTrack?.audio"
        @play="setIsPlaying(true)"
        @pause="setIsPlaying(false)"
      />
  </footer>
</template>

<style scoped>
.hidden {
  visibility: hidden;
  position: absolute;

}
body {
  font-family: "Lato", sans-serif;
}
.App {
  /* position: relative; */
  transition: all 0.5s ease;
  height: 100%;
  overflow: hidden;
}

/* .libraryActive {
  margin-left: 30%;
} */
.track-container {
  /* min-height: 60vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* transition: all 0.5s ease; */
  /* transition: all 0.75s ease-out; */
  /* background: linear-gradient(to right, #205950, #2ab3bf); */
}
img {
  margin-top: 2rem;
  width: 50%;
  border-radius: 50%;
  /* transition: all 2s ease; */
}
h2 {
  padding: 3rem 1rem 1rem 1rem;
}
h3 {
  font-size: 1rem;
}
/* custom audio tag */
/* https://stackoverflow.com/questions/4126708/is-it-possible-to-style-html5-audio-tag */
.player {
  margin-top: 2rem;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
audio {
  border: none;
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
