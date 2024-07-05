<script setup>
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
    <div class="cardy">
        <div>
            {{ id }}
        </div>
        <div>
             {{ taskName }}
             {{ taskDate }}
             {{ taskTag }}
        </div>
        <div>
             {{ taskPriority }}
             {{ taskStatus }}
        </div>
    </div>
</template>

<style scoped>
  .cardy {
    border: 1px solid blue;
    background-color: white;
  }
</style>