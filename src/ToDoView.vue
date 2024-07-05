<script setup>
  import { ref } from 'vue'
  import { VueDraggable } from 'vue-draggable-plus'

  const tasksTodoList = ref([
    {
      name: 'Joao',
      id: '1'
    },
    {
      name: 'Jean',
      id: '2'
    },
    {
      name: 'Johanna',
      id: '3'
    },
    {
      name: 'Juan',
      id: '4'
    }
  ])
  const tasksDoingList = ref(
    tasksTodoList.value.map(item => ({
      name: `${item.name}-2`,
      id: `${item.id}-2`
    }))
  )

  const tasksDoneList = ref(
    tasksTodoList.value.map(item => ({
      name: `${item.name}-3`,
      id: `${item.id}-3`
    }))
  )
</script>

<template>
    <div>
      <VueDraggable
        v-model="tasksTodoList"
        animation="150"
        ghostClass="ghost"
        group="people"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in tasksTodoList"
          :key="item.id"
          class="cursor-move h-30 bg-gray-500/5 rounded p-3"
        >
          {{ item.name }}
        </div>
      </VueDraggable>

      <VueDraggable
        class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto"
        v-model="tasksDoingList"
        animation="150"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in tasksDoingList"
          :key="item.id"
          class="cursor-move h-30 bg-gray-500/5 rounded p-3"
        >
          {{ item.name }}
    </div>
      </VueDraggable>

      <VueDraggable
        v-model="tasksDoneList"
        animation="150"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
      <div class="container">
        <div
          v-for="item in tasksDoneList"
          :key="item.id"
          class="card"
        >
          {{ item.name }}
        </div>
    </div>
      </VueDraggable>
    </div>
  </template>
  
<style scoped>

  .card {
    border: 1px solid blue;
  }

  .container {
    border: 3px solid orange;
  }
</style>