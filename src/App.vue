<script setup>
import { reactive, provide } from 'vue'
import store from './store'

const userData = reactive({
  name: 'Jorna',
  username: 'jornajan'
})

const roleData = reactive({
  rolename: 'Yasuo',
  gamename: 'LOL'
})

provide('roleData', roleData)

provide('store', store)

</script>

<template>
  <div class="user-data">
    {{userData.name}} @{{userData.username}}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/modals">Modals</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/posts">Posts</RouterLink> |
    <RouterLink to="/state-mangement">State Mangement</RouterLink>
  </nav>
  <RouterView :userData="userData" />
</template>

<style>
.user-data {
  position: absolute;
  background: beige;
  top: 0;
  right: 5px;
  font-size: 12px;
  padding: 5px;
}
</style>
