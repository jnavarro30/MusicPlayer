<script setup lang="ts">
// currentTrack
// isPlaying
</script>

<template>
    <div class="track-container">
        <img src="" alt="track cover">
        <h2>Name</h2>
        <h3>Artist</h3>
    </div>
</template>

<style scoped>
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