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
    <div class="todo-view">
      <VueDraggable
      class="container"
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
          class="card"
        >
          {{ item.name }}
        </div>
      </VueDraggable>

      <VueDraggable
class="container"
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
          class="card"
        >
          {{ item.name }}
    </div>
      </VueDraggable>

      <VueDraggable class="container"
        v-model="tasksDoneList"
        animation="150"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in tasksDoneList"
          :key="item.id"
          class="card"
        >
          {{ item.name }}
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
    width: 300px;
    margin: 100px 0 50px 0;
  }

  .todo-view {
    display: flex;
    overflow: hidden;
    gap: 10px;
    justify-content: center;
  }
</style>