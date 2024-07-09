<script setup>
import { ref, onMounted, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import Task from "./components/Task.vue"
import { ModalsContainer, useModal } from 'vue-final-modal';
import AddTaskModal from './components/AddTaskModal.vue'

let idNumber = 0;

const todoList = ref([])
const doingList = ref([])
const doneList = ref([])

watch(todoList, (newTodo) => {
  localStorage.setItem('todoList', JSON.stringify(newTodo))
}, { deep: true })

watch(doingList, (newDoing) => {
  localStorage.setItem('doingList', JSON.stringify(newDoing))
}, { deep: true })

watch(doneList, (newDone) => {
  localStorage.setItem('doneList', JSON.stringify(newDone))
}, { deep: true })

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
        //id is idNumber++
        //taskStatus is automatically todo
        idNumber++;
        const newId = idNumber.toString();
        const newDate = formatDate(params[1])
        
        const newTask = {
          id: newId,
          taskName: params[0],
          taskDate: newDate,
          taskTag: params[2],
          taskPriority: params[3],
          taskStatus: "todo"
        }
        todoList.value.push(newTask);
        close()
      },
      onClose() {
        close();
      }
    },
  })

  function formatDate(date) {
    const formattedDate = date.split('-');
    const day = parseInt(formattedDate[2], 10);
    const daySuffix = (day === 1 ? 'st' : (day === 2 ? 'nd' : (day === 3 ? 'rd' : 'th')));
    const monthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = parseInt(formattedDate[1], 10) - 1;
    const year = formattedDate[0];
    return (monthsOfTheYear[month] + ' ' + day + daySuffix + ', ' + year);
  }

  onMounted(() => {
    todoList.value = JSON.parse(localStorage.getItem('todoList')) || []
    doingList.value = JSON.parse(localStorage.getItem('doingList')) || []
    doneList.value = JSON.parse(localStorage.getItem('doneList')) || []
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
        v-model="todoList"
        animation="150"
        dragClass="drag"
        ghostClass="ghost"
        group="people"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in todoList"
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
        v-model="doingList"
        animation="150"
        dragClass="drag"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
      
        <div
          v-for="item in doingList"
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
        v-model="doneList"
        animation="150"
        dragClass="drag"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in doneList"
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
    height: 90%;
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