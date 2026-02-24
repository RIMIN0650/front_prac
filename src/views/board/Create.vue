<script setup>
import { reactive } from 'vue'
import api from '@/api/board'

const post = reactive ({
    title: '',
    contents: '',
})

const create = async () => {
    const res = await api.create(post)
}

</script>

<template>
  <div>제목 : <input v-model="post.title" type="text" /></div><br>
  <div>내용 : <input v-model="post.contents" type="text" /></div><br>
    
  <button @click="create()">등록</button>
</template>

<style scoped></style>
