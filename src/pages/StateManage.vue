<script>
import {  inject, computed } from 'vue'

export default {
  name: 'StateManagement',
  setup() {

    const store = inject('store')

    const colorCode = computed( {
      get() {
        return store.state.colorCode
      },
      set(val) {
        store.methods.setColorCode(val)
      }
    })

    return {
      store,
      colorCode
    }

  }
}
</script>
<template>
  <div class="state-management">
    <h2>State Management</h2>
    <div :style="{color: store.state.colorCode}" class="counter">
      {{store.state.counter}}
    </div>
    <div>
      {{store.state.counter}}
      <sup>2</sup>={{store.getters.counterSquared()}}
    </div>
    <div class="buttons">
      <button @click="store.methods.decreaseCounter"> - </button>
      <button @click="store.methods.increaseCounter"> + </button>
    </div>
    <div>
      <input type="text" v-model="store.state.colorCode" placeholder="Enter color code readonly" />
      <input type="text" v-model="colorCode" placeholder="Enter color code" />
    </div>

  </div>
</template>
<style>
.counter {
  font-size: 60px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
