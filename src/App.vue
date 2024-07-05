<script setup>
    import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
    

</script>

<template>
  <NavBar />
<main>
    <RouterView />
  </main>
  <footer>footer</footer>
</template>

<style scoped>
    footer {
      position: absolute;
      bottom: 0;
      background-color: antiquewhite;
      width: 100%;
    }
</style>
