<script setup lang="ts">
</script>

<template>
    <header>
        <div>
            <h1>Quendle</h1>
            <nav>
                <RouterLink class="routerlink" to="/">To Do List</RouterLink>
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

    header > div > h1 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: large;
        color: var(--darkgray);
        height: 60px;
        line-height: 60px;
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
    }
    .active,
    .routerlink:hover {
        color: #000;
        border-bottom: 3px solid var(--darkgray);
    }
</style>