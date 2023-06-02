<script setup lang="ts">
import LibraryTrack from './LibraryTrack.vue';
defineProps({
    tracks: Array,
    setCurrentTrack: {
        type: Function,
        default: () => {}
    },
    audioRef: Boolean,
    isPlaying: Boolean,
    setTracks: {
        type: Function,
        default: () => {}
    },
    libraryStatus: Boolean,
})
</script>

<template>
    <div
    class="library"
    :class="libraryStatus ? 'active-library' : ''"
    >
        <div class="library-track">
            <h2>Library</h2>
            <LibraryTrack
                v-for="track in tracks"
                :key="track.id"
                :cover="track.cover"
                :name="track.name"
                :artist="track.artist"
                :active="track.active"
                :id="track.id"
                :isPlaying="isPlaying"
                :setCurrentTrack="setCurrentTrack"
                :audioRef="audioRef"
                :setTracks="setTracks"
            />
        </div>
    </div>
</template>

<style scoped>
.library {
  position: fixed;
  box-shadow: 2px 2px 50px rgb(221, 221, 221);
  border-radius: 1rem;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  overflow: scroll;
  background: white;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
}
h2 {
    padding: 2rem;
}
.library-track {
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  transition: all 0.75s ease-out;
}
img {
    width: 30%;
  }
  .library-track:hover {
    background: rgb(235, 235, 235);
  }
</style>