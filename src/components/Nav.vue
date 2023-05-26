<script setup lang="ts">
defineProps({
  libraryStatus: Boolean,
  setLibraryStatus: {
    type: Function,
    default: () => String,
  }
})
</script>

<template>
  <nav>
    <h1>Waves</h1>
    <button :class="libraryStatus ? 'library-active' : ''" @click="setLibraryStatus(!libraryStatus)">
      Library 
      <font-awesome-icon icon="fa-solid fa-music" />
    </button>
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
  /* &:hover {
      background: rgb(65, 65, 65);
      color: white;
    } */
}

.library-active {
  background: rgb(65, 65, 65);
  color: white;
}

@media screen and (max-width: 768px) {
  button {
    z-index: 10;
  }
}</style>
