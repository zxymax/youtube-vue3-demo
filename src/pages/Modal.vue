<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

console.log(slots.title())

const props = defineProps({
  subTitle: {
    type: String,
    default: '父子之间通信使用defineProps'
  }
})

const emit = defineEmits(['hideModal'])

const handleButtonClick = () => {
  emit('hideModal')
}
</script>

<template>
    <teleport to=".modals-container">
      <div  class="modal">
        <h1><slot name="title" /></h1>
        <h4>{{subTitle}}</h4>
        <slot />
        <pre>{{$slots.title()}}</pre>
        <button @click="$emit('hideModal')">Hide model</button>
        <button @click="handleButtonClick">Hide model</button>
      </div>
    </teleport>
</template>
<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
</style>
