<script setup>
import { ref, onMounted, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import Task from "./components/Task.vue"
import { ModalsContainer, useModal } from 'vue-final-modal';
import AddTaskModal from './components/AddTaskModal.vue'
import BlueButton from './components/BlueButton.vue';
import WhiteButton from './components/WhiteButton.vue';
import ViewAllTasksModal from './components/ViewAllTasksModal.vue';

let idNumber = ref(0);
const allTasks = ref(null)

const todoList = ref([]);
const todoToday = ref([]);
const doingList = ref([]);
const doneList = ref([]);
const doneToday = ref([]);
const dateToday = getTodaysDate();
const todayMs = Date.now();
const comingupList = ref([]);
const nextSevenDays = getNextSevenDays(dateToday);

const showAllTasks = ref(false);
function closeAllTasks() {
  showAllTasks.value = false;
}

watch(todoToday, (newTodoToday) => {
  // if we delete a task from the visible list (todoToday) the task has to be delted from the full list of tasks (todoList)
  let index = 0;
  for (const task of todoList.value) {
    if (task.unformattedDate === dateToday) {
      if (todoToday.value.indexOf(task) === -1) {
        todoList.value.splice(index, 1);
      }
    }
    index++;
  }

  // if we add a task to be done today, the task has to be added to the full list of tasks
  for (const task of todoToday.value) {
    if (todoList.value.indexOf(task) === -1) {
      todoList.value.push(task);
    }
  }
})

watch(todoList, (newTodo) => {
  localStorage.setItem('todoList', JSON.stringify(newTodo));
  createComingupList();
}, { deep: true });

watch(doingList, (newDoing) => {
  localStorage.setItem('doingList', JSON.stringify(newDoing))
}, { deep: true });

watch(doneToday, (newDoneToday) => {
  let index = 0;
  for (const task of doneList.value) {
    if (task.unformattedDate === dateToday) {
      if (doneToday.value.indexOf(task) === -1) {
        doneList.value.splice(index, 1);
      }
    }
    index++;
  }

  for (const task of doneToday.value) {
    if (doneList.value.indexOf(task) === -1) {
      doneList.value.push(task);
    }
  }
  allTasks.value.updateList();
}, { deep: true });

watch(doneList, (newDone) => {
  localStorage.setItem('doneList', JSON.stringify(newDone))
}, { deep: true });

watch(idNumber, (newIdNumber) => {
  localStorage.setItem('idNumber', JSON.stringify(newIdNumber))
}, { deep: true });

onMounted(() => {
  todoList.value = JSON.parse(localStorage.getItem('todoList')) || []
  createTodoTodayList();
  //todoToday.value = todoList.value.filter(task => ((task.unformattedDate === dateToday) || (todayMs - task.taskMs >= 0)));
  createComingupList();
  doingList.value = JSON.parse(localStorage.getItem('doingList')) || []
  doneList.value = JSON.parse(localStorage.getItem('doneList')) || []
  doneToday.value = doneList.value.filter(task => task.unformattedDate === dateToday);
  idNumber.value = Number(JSON.parse(localStorage.getItem('idNumber'))) || 0
});

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

function createTodoTodayList() {
  for (const task of todoList.value) {
   if ((task.unformattedDate === dateToday) || ((todayMs - task.taskMs) >= 0)) {
     todoToday.value.push(task);
    }
  }
}

function createComingupList() {
  for (const date of nextSevenDays) {
    for (const task of todoList.value) {
      if (task.unformattedDate === date) {
        if (comingupList.value.indexOf(task) === -1)
        comingupList.value.push(task);
      }
    }
  }
}

function getTodaysDate() {
  const today = new Date();
  const todaysYear = today.getFullYear();
  const todaysMonth = (today.getMonth() + 1).toString().padStart(2, '0');
  const todaysDay = today.getDate().toString().padStart(2, '0');
  return (todaysYear + '-' + todaysMonth + '-' + todaysDay);
}

function getNextSevenDays(date) {
  const splittedDate = date.split('-');
  const day = parseInt(splittedDate[2], 10);
  const monthIndex = parseInt(splittedDate[1], 10) - 1;  
  let month = monthIndex + 1;
  let year = splittedDate[0];
  const arrayOfDates = [];
  const leapYear = isLeapYear(year);
  const daysInMonth = [31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (leapYear) {
    daysInMonth.splice(1, 0, 29);
  } else {
    daysInMonth.splice(1, 0, 28);
  }

  let nextDay = day;
  let fullDate = "";

  if ((day + 7) <= daysInMonth[monthIndex]) {
    for (let i = 0; i < 7; i++) {
      nextDay++;
      fullDate = year.toString() + "-" + month.toString().padStart(2, '0') + "-" + nextDay.toString().padStart(2, '0');
      arrayOfDates.push(fullDate);
    }
  } else {
    let ctr = 0;
    while (nextDay++ < daysInMonth[monthIndex]) {
      ctr++;
      fullDate = year.toString() + "-" + month.toString().padStart(2, '0') + "-" + nextDay.toString().padStart(2, '0');
      arrayOfDates.push(fullDate);
    }
    nextDay = 0;
    month++;
    if (month === 13) {
      month = 1;
      year++;
    }
    while (ctr < 7) {
      ctr++;
      nextDay++;
      fullDate = year.toString() + "-" + month.toString().padStart(2, '0') + "-" + nextDay.toString().padStart(2, '0');
      arrayOfDates.push(fullDate);
    }
  } 
  return arrayOfDates;
}

function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

const { open, close } = useModal({
    component: AddTaskModal,
    attrs: {
      onConfirm(params) {
        idNumber.value++;
        const newId = idNumber.value.toString();
        const newDate = formatDate(params[1])
        
        const newTask = {
          id: newId,
          taskName: params[0],
          taskMs: new Date(params[1]).getTime(),
          taskDate: newDate,
          unformattedDate: params[1],
          taskTag: params[2],
          taskPriority: params[3],
          taskStatus: "todo"
        }

        if (newTask.unformattedDate === dateToday) {
          todoToday.value.push(newTask)
        }

        todoList.value.push(newTask);
        
        close()
      },
      onClose() {
        close();
      }
    },
  })

  function inCount() {
    todoCount.value++
  }

  function formatDate(date) {
    const formattedDate = date.split('-');
    const day = parseInt(formattedDate[2], 10);
    const daySuffix = (day === 1 ? 'st' : (day === 2 ? 'nd' : (day === 3 ? 'rd' : 'th')));
    const monthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = parseInt(formattedDate[1], 10) - 1;
    const year = formattedDate[0];
    return (monthsOfTheYear[month] + ' ' + day + daySuffix + ', ' + year);
  }
</script>

<template>
  <div class="todo-view">
    <div class="container">
      <div class="listheader">
        <h2>To do</h2>
        <BlueButton @click="open">+ Add Task</BlueButton>
      </div>
      <VueDraggable
        class="container2"
        v-model="todoToday"
        animation="150"
        dragClass="drag"
        ghostClass="ghost"
        group="people"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in todoToday"
          :key="item.id"
        >
          {{ changeStatusTodo(item) }}
          <Task v-bind="item" />
        </div>
      </VueDraggable>
    </div>
    <div class="container">
      <div class="listheader">
        <h2 class="singleheader">Doing</h2>
      </div>
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
      <div class="listheader">
        <h2>Done</h2>
        <WhiteButton @click="showAllTasks = true">View All</WhiteButton>
        <ViewAllTasksModal
          ref="allTasks"
          v-model="showAllTasks"
          @confirm="() => closeAllTasks()"
        ></ViewAllTasksModal>
      </div>
      <VueDraggable
        class="container2"        
        v-model="doneToday"
        animation="150"
        dragClass="drag"
        group="people"
        ghostClass="ghost"
        @update="onUpdate"
        @add="onAdd"
        @remove="remove"
      >
        <div
          v-for="item in doneToday"
          :key="item.id"
        >
          {{ changeStatusDone(item) }}
          <Task v-bind="item" />
        </div>
      </VueDraggable>
    </div>
    <div class="comingup">
      <h2>Coming up...</h2>
      <ul>
        <li
          v-for="item in comingupList"
          :key="item.id"
        >
          {{ item.taskDate }}: {{  item.taskName }}
        </li>
      </ul>
    </div>
  </div>
  <ModalsContainer />
  
</template>
  
<style scoped>
  .comingup {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    background-color: var(--uilightest);
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 120px;
  }

  .comingup > ul > li {
    color: var(--textcolor);
    text-align: left;
  }

  .comingup > ul > li::marker {
    color: var(--textcolor);
    content: "♢ ";
    font-size: 14px;
  }

  .container {
    background-color: var(--uilightest);
    border-radius: 20px;
    box-sizing: border-box;
    margin: 100px 0 0 0;
    min-height: 400px;
    padding: 15px;
    max-width: 350px;
    min-width: 240px;
  }

  .container2 {
    height: 90%;
    min-height: 350px;
  }

  .drag {
    rotate: -3deg;
  }

  .ghost {
    filter: grayscale(100%);
    opacity: 0.5;
  }

  .listheader {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.7rem;
  }

  .listheader > .singleheader {
    margin-bottom: 9px;
  }

  .listheader > h2,
  .container > h2,
  .comingup > h2 {
    color: var(--textcolor);
    font-size: 1.3rem;
    font-weight: 300;
    margin: 0;
    text-align: left;
  }

  .todo-view {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    margin: 0 auto;
    max-width: 1082px;
  }
</style>