<script setup>
  import Tag from "./Tag.vue"

  defineProps({
    id: String,
    taskName: String,
    taskDate: String,
    taskTag: "work" | "personal" | null,
    taskPriority: "high" | "medium" | "low",
    taskStatus: "todo" | "doing" | "done"
  })
</script>

<template>
    <div class="card">
        <div>
            {{ id }}
        </div>
        <div>
          <span class="name">{{ taskName }}</span>
          <div class="datetag">
            <span class="date">{{ taskDate }}</span>
            <Tag :class="taskTag === 'work' ? 'worktag' : 'personaltag'">{{ taskTag === 'work' ? 'work' : 'personal' }}</Tag>
          </div>
        </div>
        <div>
            <button>E</button>
        </div>
    </div>
</template>

<style scoped>
  .card {
    box-shadow: 3px 3px var(--darkgray);
    margin: 5px;
    padding: 15px;
    border-radius: 15px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  .card:hover {
    cursor: grab;
  }

  .name {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .datetag {
    display: flex;
    gap: 10px;
  }

  .date {
    font-size: 0.8rem;
    color: var(--darkgray);
  }

  .worktag {
    color: red;
    background-color: pink;
  }

  .personaltag {
    color: green;
    background-color: greenyellow;
  }
</style>