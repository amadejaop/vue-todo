<script setup>
  import { RouterView } from "vue-router";
  import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <footer>
    <p>Designed and coded by <a href="https://amadejaop.github.io/">Amadeja Obšteter Privošnik</a>. | <a href="https://github.com/amadejaop/vue-todo">Source code</a> | <a href="https://amadejaop.github.io/#projects">Portfolio</a></p>
  </footer>
</template>

<style scoped>
  footer {
    background-color: var(--uilightest);
    bottom: 0;
    padding: 15px;
    position: fixed;
    width: 100%;
  }

  footer > p {
    margin: 0;
    font-size: small;
    color: var(--textcolor);
  }

  footer > p > a {
    color: var(--darkaccent);
    font-weight: 600;
  }

  footer > p > a:hover {
    text-decoration: underline;
  }

  main {
    background-color: var(--bgcolor);
    min-height: 100vh;
  }
</style>
