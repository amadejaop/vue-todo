<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    background-color: var(--uilightest);
    border: 1px solid var(--redbutton);
    color: var(--redbutton);
    padding: 5px 15px;
  }
  button:hover {
    background-color: var(--redbutton);
    color: white;
    cursor: pointer;
  }
</style>