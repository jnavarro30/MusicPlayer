<script setup lang="ts">
defineProps({
  libraryStatus: Boolean,
  setLibraryStatus: {
    type: Function,
    default: () => {},
  },
  darkView: Boolean,
  setDarkView: {
    type: Function,
    default: () => {}
  },
  isPlaying: Boolean,
});
</script>

<template>
  <nav>
    <button
      :class="{ libraryActive: libraryStatus, dark: darkView }"
      @click="setLibraryStatus(!libraryStatus)"
    >
      Library
      <font-awesome-icon icon="fa-solid fa-music" :fade="isPlaying" />
    </button>
    <font-awesome-icon
      id="dark-view-icon"
      :class="{ hide: darkView }"
      icon="fa-solid fa-moon"
      :fade="isPlaying"
      @click="setDarkView(true)"
    />
    <font-awesome-icon
      id="dark-view-icon"
      :class="darkView ? '' : 'hide'"
      icon="fa-solid fa-sun"
      :fade="isPlaying"
      @click="setDarkView(false)"
    />
  </nav>
</template>

<style scoped>
nav {
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border: 2px solid rgb(65, 65, 65);
  transition: all 0.3s ease;
}

#dark-view-icon {
  cursor: pointer;
  font-size: 1.6rem;
}

.libraryActive {
  background: rgb(65, 65, 65);
  color: white;
}

.hide {
  display: none;
}
.dark {
  background: black;
  color: white;
  transition: all 0.75s ease-out;
}
</style>
