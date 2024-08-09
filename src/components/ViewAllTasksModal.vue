<script setup>
import { onMounted, ref } from 'vue';
import { VueFinalModal } from 'vue-final-modal'

const emit = defineEmits(['confirm'])

const doneAllList = ref([])

function updateList() {
  doneAllList.value = JSON.parse(localStorage.getItem('doneList'))
}

defineExpose({ updateList });

onMounted(() => {
  doneAllList.value = JSON.parse(localStorage.getItem('doneList')) || []
})
</script>

<template>
  <VueFinalModal
      class="confirm-modal"
      content-class="confirm-modal-content"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
    >
      <h1>Content</h1>
      <ul>
        <li
          v-for="item in doneAllList"
          :key="item.id"
        >{{  item.taskName }}
        </li>
      </ul>
      <button @click="emit('confirm')">
        Confirm
      </button>
    </VueFinalModal>
</template>