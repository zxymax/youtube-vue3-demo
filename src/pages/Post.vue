<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 'id1',
    title: 'Post 1'
  },
  {
    id: 'id2',
    title: 'Post 2'
  },
  {
    id: 'id3',
    title: 'Post 3'
  }
])
</script>
<template>
  <div class="posts">
    <h3>Post views</h3>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        <RouterLink :to="`/post-detail/${post.id}`">{{post.title}}</RouterLink>
      </li>
    </ul>
  </div>
</template>
