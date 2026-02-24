<script setup>
import { reactive } from 'vue'
import api from '@/plugins/axiosinterceptor'

const post = reactive ({
    title: '',
    contents: '',
})

const create = async () => {
    try {
        const res = await api.post('/board/create', post)

        if (res.status === 200) {
            alert("등록 성공")
        }
    } catch (e) {
        console.error(e)
        alert('등록 실패')
    }

}
</script>

<template>
  <div>제목 : <input v-model="post.title" type="text" /></div><br>
  <div>내용 : <input v-model="post.contents" type="text" /></div><br>
    
  <button @click="create()">등록</button>
</template>

<style scoped></style>
