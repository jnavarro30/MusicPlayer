<script setup lang="ts">
import { type PropType, ref, onMounted, watchEffect, watch } from 'vue';
import { playAudio } from '@/utils/playAudio';
import type TrackInfoType from '@/types/TrackInfoType';
import type TrackType from '@/types/TrackType';

defineProps({
  trackInfo: Object as PropType<TrackInfoType>,
  // setTrackInfo: {
  //   type: Function,
  //   default: () => {}
  // }, 
  isPlaying: Boolean,
  setIsPlaying: {
    type: Function,
    default: () => {}
  },
  currentTrack: Object as PropType<TrackType>,
  // setCurrentTrack: {
  //   type: Function,
  //   default: () => {}
  // },
  // tracks: [] as PropType,
  // setTracks: {
  //   type: Function,
  //   default: () => {}
  // },
})

const audioRef = ref<any>(null);
// const setIsPlaying = ref(setIsPlaying);


// const trackInfo = ref(trackInfo);
// const currentTrack = ref(currentTrack);


onMounted(() => {
  console.log(audioRef.value, 'hflsdhf')
})

watchEffect(() => {
  if (audioRef.value) {
    console.log(audioRef.value.paused, 'hahhahha')
  }
})

watch(audioRef, () => {
  if (audioRef.value) {
    console.log(audioRef.value.paused, 'hahhahha')
    // setIsPlaying(audioRef.value.paused);
  }
})

</script>

<template>
  <!-- <div
          style="background: linear-gradient(to right, #205950, #2ab3bf)"
          class="track"
        > -->
    <div class="player">
      <audio
      controls
      ref="audioRef"
      >
    <source :src="currentTrack?.audio" type="audio/mpeg" />
  </audio>
    </div>
</template>

<style scoped>
  .player {
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.time-control {
  width: 50%;
  display: flex;
  align-items: center;
}

input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }

  p {
    padding: 1rem;
  }
.play-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  width: 40%;
}

svg {
    cursor: pointer;
  }

.track {
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  /* background: linear-gradient(to right, #205950, #2ab3bf); */
}
.animate-track {
  background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  padding: 1rem;
  pointer-events: none;
}

input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
}

@media screen and (max-width: 768px) {
  .time-control {
    width: 90%;
  }
  .play-control {
    width: 80%;
  }
}
</style>