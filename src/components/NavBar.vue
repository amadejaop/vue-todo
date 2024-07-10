<script setup>
  import { RouterLink } from 'vue-router';
  import { ref, onMounted, watch } from 'vue';

  const darkMode = ref();

  watch(darkMode, (newValue) => {
    localStorage.setItem('darkMode', JSON.stringify(newValue));
  }, { deep: true })

  onMounted(() => {
    darkMode.value = JSON.parse(localStorage.getItem('darkMode')) || false;
    console.log(darkMode.value)
  })

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  function setDarkMode() {
    document.documentElement.style.setProperty('--lightaccent3', 'black');
  }

  function setLightMode() {
    document.documentElement.style.setProperty('--lightaccent3', '#60a5fa');
  }
</script>

<template>
  <header>
    <div>
      <a href="/">Quendle</a>
      <nav>
        <RouterLink class="routerlink" to="/todo">To Do List</RouterLink>
        <RouterLink class="routerlink" to="/calendar">Calendar</RouterLink>
      </nav>
    </div>
    <button @click="toggleDarkMode">Dark mode</button>
  </header>
</template>

<style scoped>
  header {
    align-items: center;
    background-color: white;
    border-bottom: 1px solid var(--mediumgray);
    display: flex;
    height: 60px;
    justify-content: space-around;
    position: fixed;
    top: 0;
    width: 100%;
  }
  
  header > div {
    display: flex;
    gap: 4vw;
  }

  header > div > a {
    color: var(--darkgray);
    font-size: 1.3rem;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
    text-transform: uppercase;
    transition: .3s;
  }

  header > div > a:hover {
    color: var(--lightaccent3)
  }

  nav {
    align-items: center;
    display: flex;
    gap: 2vw;
  }
  
  .routerlink {
    box-sizing: border-box;
    display: inline-block;
    height: 60px;
    line-height: 60px;
    transition: .1s;
  }

  .routerlink:hover,
  .active {
    border-bottom: 3px solid var(--lightaccent3);
    color: #000;
  }
</style>