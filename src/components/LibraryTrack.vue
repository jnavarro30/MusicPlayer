<script setup lang="ts">
import { playAudio } from '@/utils/playAudio';

defineProps({
  name: String,
  artist: String,
  cover: String,
  id: String,
  setCurrentTrack: {
    type: Function,
    default: () => {}
  },
  tracks: Array,
  audioRef: Boolean,
  isPlaying: Boolean,
  setTracks: {
    type: Function,
    default: () => {}
  },
  active: Boolean
})

const trackSelectHandler = () => {
    const selectedTrack = tracks.filter((state) => state.id === id);
    setCurrentTrack({ ...selectedTrack[0] });
    //Set Active in library
    const newTracks = tracks.map((track) => {
      if (track.id === id) {
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

    //Play audio
    playAudio(isPlaying, audioRef);
  };
</script>

 <template>
  <div @click="trackSelectHandler" :class="['library-song', active ? 'selected' : '']">
    <img :src="cover" alt="song cover" />
    <div class="track-description">
      <h3>{{ name }}</h3>
      <h4>{{ artist }}</h4>
    </div>
  </div>
</template>

<style scoped>
.track-description {
  padding-left: 1rem;
}
h3 {
    font-size: 1rem;
  }
  h4 {
    font-size: 0.7rem;
  }
</style>