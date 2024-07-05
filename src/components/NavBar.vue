<script setup lang="ts">
</script>

<template>
    <header>
        <div>
            <span>Quendle</span>
            <nav>
                <RouterLink to="/">To do list</RouterLink>
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
        border-bottom: 1px solid #e5e5e5;
        align-items: center;
        justify-content: space-around;
        height: 60px;
    }
    
    header > div {
        display: flex;
        gap: 4vw;
    }

    header > div > span {
        text-transform: uppercase;
        font-weight: 600;
        font-size: large;
        color: var(--darkgray);
    }

    nav {
        display: flex;
        gap: 2vw;
        margin-top: 2px;
    }

    .active {
        color: #000;
    }
</style>