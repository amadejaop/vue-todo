<template>
  <div class="homeview">
    <h1>Quendle</h1>
    <p class="subtext">Quendle is an easy to use drag and drop to do app.</p>
    <h2>Updates</h2>
    <h3>August 8th, 2024</h3>
    <ul>
      <li>fixed a bug where a task would keep regenerating and showing up on the to do list, despite being moved to the doing and done lists, when refreshing the app</li>
    </ul>
    <h3>August 5th, 2024</h3>
    <ul>
      <li>the coming up section of the to do list now shows tasks due in the next 7 days</li>
    </ul>
    <h3>August 1st, 2024</h3>
    <ul>
      <li>to do and done lists now show only tasks created today, in order to avoid cluttering the lists with tasks done in the past or tasks coming up in the future</li>
    </ul>
  </div>
</template>

<style scoped>
  .homeview {
    color: var(--textcolor);
    padding: 100px 30px;
    margin: 0 auto;
    max-width: 1082px;
  }

  h1 {
    font-size: 3rem;
  }

  .subtext {
    margin: -15px 0 80px 0;
    font-weight: 500;
  }

  h2, h3, ul {
    color: var(--textcolor);
    text-align: left;
  }

  ul > li::marker {
    color: var(--textcolor);
    content: '◈  ';
    font-size: 1.1rem;
  }
</style>