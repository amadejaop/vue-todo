<script setup>
  import { RouterLink } from 'vue-router';
  import { ref, onMounted, watch } from 'vue';

  const darkMode = ref();

  watch(darkMode, (newValue) => {
    localStorage.setItem('darkMode', JSON.stringify(newValue));
  }, { deep: true })

  onMounted(() => {
    darkMode.value = JSON.parse(localStorage.getItem('darkMode')) || false;
    if (darkMode.value) {
      setDarkMode();
    } else {
      setLightMode();
    }
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
    document.documentElement.style.setProperty('--bgcolor', '#030712');
    document.documentElement.style.setProperty('--textcolor', '#fff');
    document.documentElement.style.setProperty('--uilightest', '#1f2937');
    document.documentElement.style.setProperty('--uilight', '#111827');
    document.documentElement.style.setProperty('--uimedium', '#030712');
    document.documentElement.style.setProperty('--uidark', '#d1d5db');
    document.documentElement.style.setProperty('--lightaccent', '#1d4ed8');
    document.documentElement.style.setProperty('--mediumaccent', '#2563eb');
    document.documentElement.style.setProperty('--darkaccent', '#2563eb');
    document.documentElement.style.setProperty('--redcolor', '#ef4444');
    document.documentElement.style.setProperty('--yellowcolor', '#facc15');
    document.documentElement.style.setProperty('--greencolor', '#65a30d');
    document.documentElement.style.setProperty('--redbutton', '#dc2626');  
  }

  function setLightMode() {
    document.documentElement.style.setProperty('--bgcolor', '#f3f4f6');
    document.documentElement.style.setProperty('--textcolor', '#111827');
    document.documentElement.style.setProperty('--uilightest', '#fff');
    document.documentElement.style.setProperty('--uilight', '#e5e7eb');
    document.documentElement.style.setProperty('--uimedium', '#bebebe');
    document.documentElement.style.setProperty('--uidark', '#6b7280');
    document.documentElement.style.setProperty('--lightaccent', '#eff6ff');
    document.documentElement.style.setProperty('--mediumaccent', '#bfdbfe');
    document.documentElement.style.setProperty('--darkaccent', '#60a5fa');
    document.documentElement.style.setProperty('--redcolor', '#fca5a5');
    document.documentElement.style.setProperty('--yellowcolor', '#fde047');
    document.documentElement.style.setProperty('--greencolor', '#4ade80');
    document.documentElement.style.setProperty('--redbutton', '#f87171');    
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
    background-color: var(--uilightest);
    border-bottom: 1px solid var(--uilight);
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
    color: var(--uidark);
    font-size: 1.3rem;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
    text-transform: uppercase;
    transition: .3s;
  }

  header > div > a:hover {
    color: var(--darkaccent)
  }

  nav {
    align-items: center;
    display: flex;
    gap: 2vw;
  }
  
  .routerlink {
    box-sizing: border-box;
    color: var(--uidark);
    display: inline-block;
    height: 60px;
    line-height: 60px;
    transition: .1s;
  }

  .routerlink:hover,
  .active {
    border-bottom: 3px solid var(--darkaccent);
    color: var(--textcolor);
  }
</style>