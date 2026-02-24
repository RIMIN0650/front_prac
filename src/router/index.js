import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'create',
      path: '/board/create',
      meta: {
        title: '게시물 작성 페이지',
      },
      component: () => import('@/views/board/Create.vue'),
    },
    {
      name: 'list',
      path: '/board/list',
      meta: {
        title: '게시물 전체 조회',
      },
      component: () => import('@/views/board/List.vue'),
    },
    {
      name: 'detail',
      path: '/board/detail/:idx',
      meta: {
        title: '게시물 상세 조회',
      },
      component: () => import('@/views/board/Detail.vue'),
    },

  ],
})

export default router
