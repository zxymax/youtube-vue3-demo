<script setup>
import { inject } from 'vue'
import { vAutofocus } from '../directives/vAutofocus'

const store = inject('store')

</script>

<template>
  <div>

  <h3>About</h3>
  <p>num: {{store.state.counter}}</p>
  <textarea v-autofocus></textarea>
  </div>
</template>

