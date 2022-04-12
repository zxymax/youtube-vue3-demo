<script setup>
import { ref, reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue'

const counter = ref(0)
const counterTitle = ref('My counter Title')

const counterData = reactive({
  count: 0,
  title: 'My counter'
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})

watch(() => counterData.count, (newCount, oldCount) => {
  if (newCount === 20) {
    alert('Way to go! You made it to 20!')
  }
})

const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  counter.value--
}

const increaseCounter2 = amount => {
  counterData.count += amount 
}

const decreaseCounter2 = amount => {
  counterData.count -= amount
}

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})
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
      <button @click="decreaseCounter2(1)">decreaseCounter2</button>
      <span>{{counterData.count}}</span>
      <button @click="increaseCounter2(1, $event)">increaseCounter2</button>
      <p>This counter is {{oddOrEven}}</p>
    </div>
    <div class="edit">
      <h3>Edit counter title: </h3>
      <input type="text" v-model="counterTitle" />
    </div>
  </div>
</template>
