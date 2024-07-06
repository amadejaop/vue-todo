<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import Task from "./components/Task.vue"
import { ModalsContainer, useModal } from 'vue-final-modal';
import AddTaskModal from './components/AddTaskModal.vue'

let idNumber = 0;

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
function changeStatusTodo(item) {
    item.taskStatus = "todo";
}
function changeStatusDoing(item) {
    item.taskStatus = "doing";
}
function changeStatusDone(item) {
    item.taskStatus = "done";
}

const { open, close } = useModal({
    component: AddTaskModal,
    attrs: {
      onConfirm(params) {
        // adding info obtained to the array
        console.log(params[0])
        console.log(params[1])
        console.log(params[2])
        idNumber++;
        console.log(idNumber)
        close()
      },
    },
  })
</script>

<template>
    <div class="todo-view">
        <div class="container">
            <div class="listheader">
            <h2>To do</h2>
            <button @click="open">+ Add Task</button>
        </div>
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
        >
        {{ changeStatusTodo(item) }}
        <Task v-bind="item" />
        </div>
      </VueDraggable>
    </div>
      <div class="container">
        <h2>Doing</h2>
      <VueDraggable
      class="container2"        
      v-model="list2"
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
        >

        {{ changeStatusDoing(item) }}
        <Task v-bind="item" />
        </div>
      </VueDraggable>
    </div>
    <div class="container">
        <h2>Done</h2>
      <VueDraggable
        class="container2"        
        v-model="list3"
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
          {{ changeStatusDone(item) }}
          <Task v-bind="item" />
        </div>
      </VueDraggable>
    </div>
    </div>
    <ModalsContainer />
  </template>
  
<style scoped>
  .container {
    border-radius: 20px;
    background-color: white;
    width: 350px;
    min-height: 400px;
    margin: 100px 0 50px 0;
    padding: 15px;
    box-sizing: border-box;
  }

  .container2 {
    min-height: 350px;
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

  .listheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .listheader > h2,
  .container > h2 {
    text-align: left;
    margin: 0;
    padding: 10px 0;
    font-size: 1.3rem;
    font-weight: 300;
  }

  button[type=button] {
    background-color: var(--lightaccent3);
    color: white;
    transition: .2s;
  }

  button[type=button]:hover {
    border: 1px solid var(--lightaccent3);
    color: var(--lightaccent3);
    background-color: white;
  }
</style>