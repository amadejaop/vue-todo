<script setup>
import { VueFinalModal } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import BlueButton from './BlueButton.vue';
import RedButton from './RedButton.vue';

const emit = defineEmits(['confirm', 'close'])
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <h3>Edit Task</h3>
        <div class="btns">
          <RedButton type="button" @click="emit('close')">Cancel</RedButton>
          <BlueButton type="submit" @click="emit('confirm')">
            Edit task
          </BlueButton>
        </div>
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
    width: 300px;
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