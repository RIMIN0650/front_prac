import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'create',
      path: '/create',
      meta: {
        title: '게시물 작성 페이지',
      },
      component: () => import('@/views/board/Create.vue'),
    },


  ],
})

export default router
