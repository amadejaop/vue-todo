<template>
    <button type="button">
      <slot></slot>
    </button>
  </template>
  
  <style scoped>
    button {
      background-color: var(--uilightest);
      border: 1px solid var(--uidark);
      color: var(--uidark);
      padding: 7px 15px;
    }
    button:hover {
      background-color: var(--uidark);
      color: white;
      cursor: pointer;
    }
  </style>