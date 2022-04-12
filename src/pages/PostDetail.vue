<script setup>
import { useRoute, useRouter } from 'vue-router'
import { vAutofocus } from '../directives/vAutofocus'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  console.log(`The ID of this post is: ${route.params.id}`)    
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    //router.push('/')
    router.push({ name: 'home' })
  }, 3000)
}

const goToFirstPost = () => {
  router.push({
    name: 'post-detail',
    params: {
      id: 'id1'
    }
  })
}
</script>

<template>
  <div class="post-detail">
    <h3>this is post page</h3>
    <p>display the context of post with id of {{$route.params.id}} here!</p>

    <div>
      <button @click="showPostId">show post id</button>
    </div>

    <div>
      <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>

    <div>
      <button @click="goToFirstPost">goToFirstPost</button>
    </div>

    <p><RouterLink to="/posts">&lt; back</RouterLink></p>
    <textarea v-autofocus></textarea>
  </div>
</template>

