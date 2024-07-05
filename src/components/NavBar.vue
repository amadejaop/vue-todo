<script setup lang="ts">
import { RouterLink } from 'vue-router';

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
        <button>Dark mode</button>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        background-color: white;
        border-bottom: 1px solid var(--mediumgray);
        align-items: center;
        justify-content: space-around;
        height: 60px;
        position: fixed;
        top: 0;
        width: 100%;
    }
    
    header > div {
        display: flex;
        gap: 4vw;
    }

    header > div > a {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.3rem;
        color: var(--darkgray);
        height: 60px;
        line-height: 60px;
        transition: .3s;
    }

    header > div > a:hover {
        color: var(--lightaccent3)
    }

    nav {
        display: flex;
        gap: 2vw;
        align-items: center;
    }

    
    .routerlink {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;
        transition: .1s
    }
    .active,
    .routerlink:hover {
        color: #000;
        border-bottom: 3px solid var(--lightaccent3);
    }
</style>