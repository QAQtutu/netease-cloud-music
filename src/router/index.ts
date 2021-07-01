import { createRouter, createWebHashHistory, Router } from "vue-router";
import { App } from 'vue'

const Layout = () => import('@/layout/index.vue');


// const Index = () => import('@/views/index.vue');

const routes = [
  {
    path: "/",
    name: "Index",
    redirect: '/find-music',
    component: Layout,
    children: [
      {
        path: 'find-music',
        name: 'FindMusic',
        component: () => import('@/views/find-music/index.vue')
      }
    ]
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export function setupRouter(app: App<Element>) {
  app.use(router);
}

