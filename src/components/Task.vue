<script setup>
  import Tag from "./Tag.vue"
  import EditTaskModal from './EditTaskModal.vue';
  import { ModalsContainer, useModal } from 'vue-final-modal';
  import { ref, watch, onMounted, nextTick } from 'vue'

  defineProps({
    id: String,
    taskName: String,
    taskDate: String,
    unformattedDate: String,
    taskTag: "work" | "personal" | null,
    taskPriority: "high" | "medium" | "low",
    taskStatus: "todo" | "doing" | "done"
  })

  const editedTodo = ref([])

  watch(editedTodo, (edited) => {
  localStorage.setItem('todoList', JSON.stringify(edited))
}, { deep: true })

onMounted(() => {
  editedTodo.value = JSON.parse(localStorage.getItem('todoList'))
})

  const { open, close } = useModal({
    component: EditTaskModal,
    attrs: {
      onConfirm(params) {
        const editId = JSON.parse(localStorage.getItem('currentId'))
        const index = editedTodo.value.findIndex((task) => task.id == editId)

        editedTodo.value[index].taskName = params[0];
        editedTodo.value[index].taskDate = formatDate(params[1]);
        editedTodo.value[index].unformattedDate = params[1];
        editedTodo.value[index].taskTag = params[2];
        editedTodo.value[index].taskPriority = params[3];
        console.log(editedTodo.value[index])
        console.log(editedTodo.value)
        location.reload();
        close();
      },
      onDelete() {
        const deleteId = JSON.parse(localStorage.getItem('currentId'))
        const todoListDelete = JSON.parse(localStorage.getItem('todoList'))
        const index = todoListDelete.findIndex((task) => task.id == deleteId)
        todoListDelete.splice(index, 1)
        localStorage.setItem('todoList', JSON.stringify(todoListDelete));
        location.reload();
        close();
      },
      onClose() {
        close();
      }
    },
  })

  function openModal(id) {
    localStorage.setItem('currentId', JSON.stringify(id))
    open();
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
    <div class="card" :class="taskPriority === 'high' ? 'highPriority' : (taskPriority === 'medium' ? 'mediumPriority' : 'lowPriority')">
        <div v-if="taskStatus === 'todo'">
          {{ id < 10 ? '0' + id : id }}
        </div>
        <div v-else-if="taskStatus === 'doing'">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 3H4M20 21H4M5 3C5 5.51022 6.21228 7.86592 8.25493 9.32495L15.7451 14.675C17.7877 16.1341 19 18.4898 19 21M19 3C19 5.51022 17.7877 7.86592 15.7451 9.32495L8.25493 14.675C6.21228 16.1341 5 18.4898 5 21" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <div v-else>
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12.3333L10.4615 15L16 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <div>
          <span class="name">{{ taskName }}</span>
          <div class="datetag">
            <span class="date">{{ taskDate }}</span>
            <Tag :class="taskTag === 'work' ? 'worktag' : 'personaltag'">{{ taskTag === 'work' ? 'work' : 'personal' }}</Tag>
          </div>
        </div>
        <div v-if="taskStatus === 'todo'">
            <button type="button" @click="openModal(id)">
              <svg viewBox="0 0 24 24" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20V22ZM12.4453 4.01216C12.9968 4.04235 13.4683 3.61979 13.4985 3.06833C13.5287 2.51687 13.1061 2.04535 12.5547 2.01515L12.4453 4.01216ZM11.7627 9.23726L11.0556 8.53015L11.7627 9.23726ZM17.411 3.58902L18.1181 4.29613L17.411 3.58902ZM9 15L8.01005 14.8586C7.96411 15.1802 8.07723 15.504 8.3134 15.727C8.54957 15.9501 8.87936 16.0445 9.19778 15.9802L9 15ZM9.04745 14.6678L8.0575 14.5264L8.0575 14.5264L9.04745 14.6678ZM9.48793 14.9016L9.29015 13.9213L9.48793 14.9016ZM12.8012 13.7247L12.2287 12.9048H12.2287L12.8012 13.7247ZM11.564 14.3882L11.9302 15.3187H11.9302L11.564 14.3882ZM10.1791 10.9786L9.34943 10.4203V10.4203L10.1791 10.9786ZM9.49029 12.3561L8.54586 12.0274V12.0274L9.49029 12.3561ZM16.7071 4.29289C16.3166 3.90237 15.6834 3.90237 15.2929 4.29289C14.9024 4.68342 14.9024 5.31658 15.2929 5.70711L16.7071 4.29289ZM18.1213 8.53553C18.5118 8.92606 19.145 8.92606 19.5355 8.53553C19.9261 8.14501 19.9261 7.51184 19.5355 7.12132L18.1213 8.53553ZM16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18V16ZM21.88 10.8011C21.7701 10.2598 21.2423 9.91012 20.701 10.02C20.1598 10.1299 19.8101 10.6577 19.92 11.1989L21.88 10.8011ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C12.1495 4 12.298 4.00409 12.4453 4.01216L12.5547 2.01515C12.371 2.00509 12.186 2 12 2V4ZM12.4698 9.94436L18.1181 4.29613L16.7039 2.88191L11.0556 8.53015L12.4698 9.94436ZM19.5323 5.71034L13.6703 11.5723L15.0845 12.9865L20.9465 7.12455L19.5323 5.71034ZM9.98995 15.1414L10.0374 14.8093L8.0575 14.5264L8.01005 14.8586L9.98995 15.1414ZM9.29015 13.9213L8.80222 14.0198L9.19778 15.9802L9.68571 15.8818L9.29015 13.9213ZM13.6703 11.5723C12.8844 12.3582 12.5736 12.664 12.2287 12.9048L13.3737 14.5447C13.8964 14.1797 14.3472 13.7239 15.0845 12.9865L13.6703 11.5723ZM9.68571 15.8818C10.7079 15.6755 11.3371 15.5522 11.9302 15.3187L11.1977 13.4577C10.8064 13.6118 10.3796 13.7015 9.29015 13.9213L9.68571 15.8818ZM12.2287 12.9048C11.9079 13.1288 11.5618 13.3144 11.1977 13.4577L11.9302 15.3187C12.44 15.1181 12.9245 14.8583 13.3737 14.5447L12.2287 12.9048ZM11.0556 8.53015C10.243 9.34283 9.74031 9.83942 9.34943 10.4203L11.0087 11.5369C11.2665 11.1538 11.6034 10.8108 12.4698 9.94436L11.0556 8.53015ZM10.0374 14.8093C10.2107 13.5963 10.2829 13.121 10.4347 12.6848L8.54586 12.0274C8.31572 12.6886 8.22004 13.3887 8.0575 14.5264L10.0374 14.8093ZM9.34943 10.4203C9.01364 10.9192 8.74356 11.4594 8.54586 12.0274L10.4347 12.6848C10.5759 12.2791 10.7688 11.8933 11.0087 11.5369L9.34943 10.4203ZM19.5323 4.29613C19.9228 4.68665 19.9228 5.31981 19.5323 5.71034L20.9465 7.12455C22.1181 5.95298 22.1181 4.05348 20.9465 2.88191L19.5323 4.29613ZM20.9465 2.88191C19.7749 1.71034 17.8754 1.71034 16.7039 2.88191L18.1181 4.29613C18.5086 3.9056 19.1418 3.9056 19.5323 4.29613L20.9465 2.88191ZM15.2929 5.70711L18.1213 8.53553L19.5355 7.12132L16.7071 4.29289L15.2929 5.70711ZM20 12C20 14.2091 18.2091 16 16 16V18C19.3137 18 22 15.3137 22 12H20ZM19.92 11.1989C19.9723 11.4569 20 11.7247 20 12H22C22 11.5903 21.9588 11.1893 21.88 10.8011L19.92 11.1989Z" fill="#60a5fa"></path> </g></svg>
            </button>
        </div>
    </div>
    <ModalsContainer />
</template>

<style scoped>
  button[type=button] {
    background-color: var(--lightaccent);
    border-radius: 50%;
    height: 30px;
    padding: 1px;
    position: relative;
    transition:0.5s;
    width: 30px;
  }

  button[type=button]:hover {
    background-color: var(--darkaccent);
  }

  button[type=button]:hover > svg {
    filter: brightness(0) invert(1);
  }

  button[type=button] > svg {
    position: absolute;
    right: 2px;
    top: 2px;
  }

  .card {
    align-items: center;
    background-color: var(--uilightest);
    border-radius: 15px;
    border: 1px solid var(--uilight);
    box-shadow: 3px 3px var(--uimedium);
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin: 5px 0 15px 0;
    padding: 5px 10px;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }

  .card:hover {
    cursor: grab;
  }

  .card > div:first-child {
    align-items: center;
    background-color: var(--lightaccent);
    border-radius: 50%;
    color: var(--darkaccent);
    display: flex;
    font-size: 0.8rem;
    font-weight: 500;
    height: 30px;
    justify-content: center;
    width: 30px;
  }

  .card > div:nth-child(2) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .date {
    color: var(--uidark);
    font-size: 0.8rem;
  }

  .datetag {
    display: flex;
    gap: 10px;
  }

  .highPriority {
    border-left: 4px solid var(--redcolor);
  }

  .lowPriority {
    border-left: 4px solid var(--greencolor);
  }

  .mediumPriority {
    border-left: 4px solid var(--yellowcolor);
  }

  .name {
    color: var(--textcolor);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .personaltag {
    background-color: greenyellow;
    color: green;
  }

  .worktag {
    background-color: pink;
    color: red;
  }  
</style>