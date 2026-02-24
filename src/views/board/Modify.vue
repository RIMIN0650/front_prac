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

const modify = async() => {
    const idx = route.params.idx
    await api.modify(idx, post)
}

onMounted(() => {
    detail()
})

</script>

<template>

    <div>제목 수정 : <input v-model="post.title" type="text" :placeholder="post.title"></div><br>

    <div>내용 수정 : <input v-model="post.contents" type="text" :placeholder="post.contents"></div><br>

    <button @click="modify()">수정</button>

</template>

<style>
</style>