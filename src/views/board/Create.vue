<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const create = async () => {
    alert("등록 버튼");
}
</script>

<template>
  <div>제목 : <input type="title" /></div><br>
  <div>내용 : <input type="contents" /></div><br>
    
  <button @click="create()">등록</button>
</template>

<style scoped></style>
