<template>
    <button type="button">
        <slot></slot>
    </button>
</template>

<style scoped>
    button {
        border: 1px solid #f87171;
        color: #f87171;
        background-color: #fff;
        padding: 5px 15px;
    }
    button:hover {
        background-color: #f87171;
        color: #fff;
        cursor: pointer;
    }
</style>