<script setup>
import { ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import BlueButton from './BlueButton.vue';
import RedButton from './RedButton.vue';

const emit = defineEmits(['confirm', 'close'])
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
    <h3>Add Task</h3>
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
      
        <div class="btns">
          <RedButton type="button" @click="emit('close')">Cancel</RedButton>
          <BlueButton type="submit" @click="emit('confirm', [addTaskName, addTaskDate, addTaskTag, addTaskPriority])">
            Add
          </BlueButton>
        </div>
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
  gap: 1rem;
  width: 300px;
}

.confirm-modal-content > h3 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.confirm-modal-content > form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.confirm-modal-content > form > label > input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 1px solid var(--mediumgray2);
  padding: 5px 10px;
  font-size: 1rem;
  font-family: Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

.confirm-modal-content > form > fieldset {
  border: 1px solid var(--mediumgray2);
  border-radius: 0.5rem;
  display: flex;
  align-items: baseline;
}

.confirm-modal-content > form > fieldset > label {
  margin: 0 1rem 0 0.2rem;
}

.btns {
  display: flex;
  gap: 1rem;
  justify-content: end;
}
</style>
