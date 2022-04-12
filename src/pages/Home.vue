<script setup>
import { ref, reactive, computed, watch, onBeforeUpdate, onUpdated, onMounted, nextTick } from 'vue'
import { vAutofocus } from '../directives/vAutofocus'

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



const appTitle = 'My Ok Counter app'
const appTitleRef = ref(null)

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth}px wide`)
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

const increaseCounter2 = async (amount, e) => {
  counterData.count += amount 

  // do something after the dom had updated
  /*
  nextTick(() => {
    console.log('do something after the dom had updated')
  })
  */

  await nextTick()
  console.log('do something after the dom had updated')
}

const decreaseCounter2 = amount => {
  counterData.count -= amount
}

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})




</script>

<template>
  <div class="home">
    <h1 ref="appTitleRef">{{appTitle}}</h1>
    <h2>{{counterTitle === '' ? 'My counter Title' : counterTitle}}</h2>
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
      <input type="text" v-model="counterTitle" v-autofocus />
    </div>
  </div>
</template>
