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
  .btns {
    display: flex;
    gap: 1rem;
    justify-content: end;
  }

  .confirm-modal {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  
  .confirm-modal-content {
    background: var(--uilightest);
    border-radius: 0.5rem;
    color: var(--textcolor);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 305px;
  }

  .confirm-modal-content > h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  .confirm-modal-content > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .confirm-modal-content > form > label > input {
    background-color: var(--uilight);
    border-radius: 0.5rem;
    border: 1px solid var(--uimedium);
    box-sizing: border-box;
    color: var(--textcolor);
    font-family: Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    padding: 5px 10px;
    width: 100%;
  }

  .confirm-modal-content > form > fieldset {
    align-items: baseline;
    border-radius: 0.5rem;
    border: 1px solid var(--uimedium);
    display: flex;
  }

  .confirm-modal-content > form > fieldset > label {
    margin: 0 1rem 0 0.2rem;
  }
</style>