<script setup lang="ts">
import { ref } from 'vue';
import { playAudio } from '@/utils/playAudio';

const activeVolume = ref(false);
const setActiveVolume = (vol: boolean) => {
    activeVolume.value = vol;
}

const activeLibraryHandler = (nextPrev) => {
    const newTracks = tracks.map((track) => {
      if (track.id === nextPrev.id) {
        return {
          ...track,
          active: true,
        };
      } else {
        return {
          ...track,
          active: false,
        };
      }
    });

    setTracks(newTracks);
  };

  
</script>

<template>
    
</template>