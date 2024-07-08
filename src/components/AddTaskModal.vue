<script setup>
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import 'vue-final-modal/style.css'

const emit = defineEmits(['confirm', 'close'])
const first = 'hello'
const second = 'there'
const last = 'world'

//taskName
//taskDate create with date OR allow user to choose a different date
// create a date and use it inside ref, then if the user wants to change the date, he can
//task Tag, which is optional checkbox
//task priority which is mandatory radio
const addTaskName = ref('Work on project A');
const addTaskDate = ref(getTodaysDate());
const addTaskTag = ref('work');
const addTaskPriority = ref('high');

function getTodaysDate() {
  const today = new Date();
  const todaysYear = today.getFullYear();
  const todaysMonth = (today.getMonth() + 1).toString().padStart(2, '0');
  const todaysDay = today.getDate().toString().padStart(2, '0');
  return (todaysYear + '-' + todaysMonth + '-' + todaysDay);
}
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h2>Add Task</h2>
      <form @submit.prevent>
        <label for="addTaskName">* Task: <input v-model="addTaskName" placeholder="Ex.: Do the dishes" minlength="3" required></label>
        <label for="addTaskDate">* Date: <input v-model="addTaskDate" type="date" required></label>
        <fieldset>
          <legend>* Tag: </legend>
          <input type="radio" id="work" value="work" v-model="addTaskTag" required><label for="work" checked>work</label>
          <input type="radio" id="personal" value="personal" v-model="addTaskTag" required><label for="personal">personal</label>
        </fieldset>

        <fieldset>
          <legend>* Priority:</legend>
          <input type="radio" id="high" value="high" v-model="addTaskPriority" required><label for="high" checked>high</label>
          <input type="radio" id="medium" value="medium" v-model="addTaskPriority"><label for="medium">medium</label>
          <input type="radio" id="low" value="low" v-model="addTaskPriority"><label for="low">low</label>
        </fieldset>
      
        <button type="button" @click="emit('close')">Cancel</button>
        <button type="submit" @click="emit('confirm', [addTaskName, addTaskDate, addTaskTag, addTaskPriority])">
          Add
        </button>
      </form>
  </VueFinalModal>
</template>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
}
.confirm-modal-content > * + *{
  margin: 0.5rem 0;
}
.confirm-modal-content h1 {
  font-size: 1.375rem;
}
.confirm-modal-content button {
  margin: 0.25rem 0 0 auto;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 0.5rem;
}
.dark .confirm-modal-content {
  background: #000;
}
</style>
