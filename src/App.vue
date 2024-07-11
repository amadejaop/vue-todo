<script setup>
  import { RouterView } from "vue-router";
  import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <footer>footer
  </footer>
</template>

<style scoped>
  footer {
    background-color: var(--uilightest);
    bottom: 0;
    position: fixed;
    width: 100%;
  }

  main {
    background-color: var(--bgcolor);
    min-height: 100vh;
  }
</style>
