/*
 * @LastEditors: isboyjc
 * @Description: 路由配置
 * @Date: 2022-09-17 14:35:02
 * @LastEditTime: 2022-11-16 02:36:37
 * @Author: isboyjc
 */
import { createRouter, createWebHistory } from 'vue-router'
import { menuRouter } from './menuRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'init',
      component: () => import('@views/init/initIndex.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          meta: {
            title: 'home'
          },
          component: () => import('@views/home/homeIndex.vue')
        },
        ...menuRouter
      ]
    }
  ]
})

export default router
