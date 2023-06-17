<script setup lang="ts">
import { TrackOpTypes, type PropType } from "vue";
import type TrackType from "../types/TrackType";
const props = defineProps({
  tracks: Array as PropType<TrackType[]>,
  setCurrentTrack: {
    type: Function,
    default: () => {},
  },
  isPlaying: Boolean,
  setIsPlaying: {
    type: Function,
    default: () => {},
  },
  setTracks: {
    type: Function,
    default: () => {},
  },
  libraryStatus: Boolean,
  audioRef: HTMLAudioElement,
  currentTrack: {} as PropType<TrackType>,
  darkView: Boolean,
});

const clickHandler = (track: any) => {
  props.setCurrentTrack(track);
  props.setIsPlaying(false);
};
</script>

<template>
  <div

    class="library"
    :class="{ activeLibrary: libraryStatus, dark: darkView }"
  >
    <div class="library-tracks">
      <div
        v-for="track in tracks"
        class="libraryTrack"
        :class="{ selected: track.id == currentTrack?.id }"
        @click="clickHandler(track)"
      >
        <img :src="track.cover" alt="track cover" />
        <div class="track-description">
          <h3>{{ track.name }}</h3>
          <h4>{{ track.artist }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.library {
  height: 100%;
  /* box-shadow: 2px 2px 50px rgb(221, 221, 221); */
  overflow: scroll;
  /* transform: translateX(-100%); */
  /* transition: all 0.5s ease; */
  opacity: 0;
}

.activeLibrary {
  transform: translateX(0%);
  opacity: 1;
}
h2 {
  padding: 2rem;
}
.library-tracks {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  cursor: pointer;
  transition: all 0.75s ease-out;
  width: 100%;
}
img {
  width: 30%;
}
.library-track:hover {
  background: rgb(235, 235, 235);
}

.libraryTrack {
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  transition: all 0.75s ease-out;
}

.track-description {
  padding-left: 1rem;
}
h3 {
  font-size: 1rem;
}
h4 {
  font-size: 0.7rem;
}
img {
  width: 30%;
}

.selected {
  background: rgb(194, 208, 253);
}
.dark {
  background: black;
  color: white;
}
</style>
