<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/api/board'

const route = useRoute()

const post = reactive({
    title: '',
    contents: '',
})

const detail = async() => {
    const idx = route.params.idx
    const res = await api.detail(idx)

    post.title = res.title
    post.contents = res.contents
}

onMounted(() => {
    detail()
})


const remove = async() => {
    const idx = route.params.idx
    await api.remove(idx)
}


</script>

<template>

    <div>제목 : {{ post.title }}</div>
    <div>내용 : {{ post.contents }}</div>

    <div>
        <button>수정</button>&nbsp;&nbsp;&nbsp;
        <button @click="remove()">삭제</button>
    </div>
    
    
</template>

<style>
</style>