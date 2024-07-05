<script setup lang="ts">
</script>

<template>
    <header>
        <div>
            <h1>Quendle</h1>
            <nav>
                <RouterLink to="/">To Do List</RouterLink>
                <RouterLink to="/calendar">Calendar</RouterLink>
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
    }

    nav {
        display: flex;
        gap: 2vw;
        align-items: center;
    }

    .active {
        color: #000;
        border-bottom: 1px solid red;
    }
</style>