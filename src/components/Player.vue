<script setup lang="ts">
import { ref } from 'vue';
import { playAudio } from '@/utils/playAudio';
import type TrackInfoType from '@/types/TrackInfoType';

defineProps({
  trackInfo: Object as PropType<TrackInfoType>,
})

const getTime = (time: number) => {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
}

  // const trackAnim = {
  //   transform: `translateX(${songInfo.animationPercentage}%)`,
  // };
</script>

<template>
    <div class="player">
      <div class="time-control">
        <p>{{  trackInfo }}</p>
        <p>{{ getTime(12345) }}</p>
        <div
          style="background: linear-gradient(to right, #205950, #2ab3bf)"
          class="track"
        >
          <!-- <input
            value={songInfo.currentTime}
            type="range"
            max={songInfo.duration || 0}
            min={0}
            onChange={dragHandler}
          /> -->
          <div style={trackAnim} class="animate-track"></div>
        </div>
      </div>
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