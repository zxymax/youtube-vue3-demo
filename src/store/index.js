import { reactive, readonly } from 'vue'

const state = reactive({
  counter: 0,
  colorCode: 'blue'
})

const methods = {
  increaseCounter() {
    state.counter++
    console.log('increaseCounter')
  },
  decreaseCounter() {
    state.counter--
    console.log('decreaseCounter')
  },
  setColorCode(val) {
    state.colorCode = val
  }
}

const getters = {
  counterSquared() {
    return state.counter * state.counter
  }
}

export default {
  state: readonly(state),
  methods,
  getters
}
