<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    background-color: var(--darkaccent);
    color: var(--uilightest);
    padding: 7px 15px;
  }
  button:hover {
    background-color: var(--uilightest);
    border: 1px solid var(--darkaccent);
    color: var(--darkaccent);
    cursor: pointer;
  }
</style>