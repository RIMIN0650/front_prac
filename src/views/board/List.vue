<script setup>
import { onMounted, reactive } from 'vue'
import api from '@/api/board'


const list = reactive([])
const getList = async () => {
    const res = await api.list()

    list.push(...res)

}

onMounted(() => {
    getList()
})
</script>

<template>

    <table>
        <thead>
            <tr>
                <th>제목</th>
                <th>내용</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in list">
                <td>{{ post.title }}</td>
                <td>{{ post.contents }}</td>
            </tr>
        </tbody>
    </table>

</template>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    padding: 10px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
</style>