<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import Task from "./components/Task.vue"
const list1 = ref([
  {
    id: '1',
    taskName: "brush teeth",
    taskDate: "Dec 15th, 2024",
    taskTag: "personal",
    taskPriority: "high",
    taskStatus: "todo"
  },
  {
    id: '2',
    taskName: "wash car",
    taskDate: "Dec 15th, 2024",
    taskTag: "personal",
    taskPriority: "low",
    taskStatus: "todo"
  },
  {
    id: '3',
    taskName: "work on a project",
    taskDate: "Dec 15th, 2024",
    taskTag: "work",
    taskPriority: "high",
    taskStatus: "todo"
  },
  {
    id: '4',
    taskName: "do the laundry",
    taskDate: "Dec 15th, 2024",
    taskTag: "personal",
    taskPriority: "medium",
    taskStatus: "todo"
  },
])
const list2 = ref(
  []
)
const list3 = ref(
  []
)
function onUpdate() {
  console.log('update')
}
function onAdd() {
  console.log('add')
}
function remove() {
  console.log('remove')
}
</script>

<template>
    <div class="todo-view">
        <div class="container">
            <h4>to do</h4>
      <VueDraggable
      class="container2"
      v-model="list1"
        animation="150"
        dragClass="drag"
        ghostClass="ghost"
        group="people"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in list1"
          :key="item.id"
          class="cursor-move h-30 bg-gray-500/5 rounded p-3"
        >
        <Task v-bind="item" />
        </div>
      </VueDraggable>
    </div>
      <div class="container">
        <h4>doing</h4>
      <VueDraggable
      class="container2"        v-model="list2"
        animation="150"
        dragClass="drag"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
      
        <div
          v-for="item in list2"
          :key="item.id"
          class="cursor-move h-30 bg-gray-500/5 rounded p-3"
        >
        <Task v-bind="item" />
        </div>
      </VueDraggable>
    </div>
    <div class="container">
        <h4>done</h4>
      <VueDraggable
      class="container2"        v-model="list3"
        animation="150"
        dragClass="drag"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in list3"
          :key="item.id"
          
        >
        <Task v-bind="item" />
        </div>
      </VueDraggable>
    </div>
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

  .container2 {
    height: 70%;
    border: 2px solid red;
  }

  .todo-view {
    display: flex;
    overflow: hidden;
    gap: 10px;
    justify-content: center;
  }

  .drag {
    rotate: -3deg;
  }

  .ghost {
    opacity: 0.5;
    filter: grayscale(100%);
  }
</style>