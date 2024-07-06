<script setup>
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import 'vue-final-modal/style.css'

const emit = defineEmits(['confirm'])
const first = 'hello'
const second = 'there'
const last = 'world'

//taskName
//taskDate create with date OR allow user to choose a different date
// create a date and use it inside ref, then if the user wants to change the date, he can
//task Tag, which is optional checkbox
//task priority which is mandatory radio
const addTaskName = ref('');
const today = new Date();
const monthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const todaysDay = today.getDate();
const todaysSuffix = (todaysDay === 1 ? 'st' : (todaysDay === 2 ? 'nd' : (todaysDay === 3 ? 'rd' : 'th')));
const todaysMonth = monthsOfTheYear[today.getMonth()];
const todaysYear = today.getFullYear();
console.log(todaysMonth + ' ' + todaysDay + todaysSuffix + ', ' + todaysYear)
const addTaskDate = ref(`{todaysMonth}`);
console.log('task name: ' + addTaskName)
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h2>Add Task</h2>
      <button @click="emit('confirm', [first, second, last])">
        Add
      </button>
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
