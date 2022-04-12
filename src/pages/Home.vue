<script setup>
import { ref, reactive } from 'vue'

const counter = ref(0)
const counterTitle = ref('My counter Title')

const counterData = reactive({
  count: 0,
  title: 'My counter'
})


const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  counter.value--
}

const increaseCounter2 = () => {
  counterData.count++
}

const decreaseCounter2 = () => {
  counterData.count--
}
</script>

<template>
  <div class="home">
    <h1>{{counterTitle === '' ? 'My counter Title' : counterTitle}}</h1>
    <div>
      <button @click="decreaseCounter"> - </button>
      <span>{{counter}}</span>
      <button @click="increaseCounter"> + </button>
    </div>
    <div>
      <button @click="decreaseCounter2">decreaseCounter2</button>
      <span>{{counterData.count}}</span>
      <button @click="increaseCounter2">increaseCounter2</button>
    </div>
    <div class="edit">
      <h3>Edit counter title: </h3>
      <input type="text" v-model="counterTitle" />
    </div>
  </div>
</template>
