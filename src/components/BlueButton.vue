<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    background-color: var(--lightaccent3);
    color: #fff;
    padding: 7px 15px;
  }
  button:hover {
    background-color: #fff;
    border: 1px solid var(--lightaccent3);
    color: var(--lightaccent3);
    cursor: pointer;
  }
</style>