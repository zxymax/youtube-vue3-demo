<script setup>
import { reactive, provide } from 'vue'

const userData = reactive({
  name: 'Jorna',
  username: 'jornajan'
})

const roleData = reactive({
  rolename: 'Yasuo',
  gamename: 'LOL'
})

provide('roleData', roleData)

</script>

<template>
  <div class="user-data">
    {{userData.name}} @{{userData.username}}
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/modals">Modals</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/posts">Posts</RouterLink>
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
