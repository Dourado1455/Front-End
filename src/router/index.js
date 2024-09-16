// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Cadastro from '../pages/Cadastro.vue';
import Voo from '../pages/Voo.vue';
import Right from '../pages/Right.vue';

const routes = [
  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/Voo',
    name: 'Voo',
    component: Voo,
  },
  {
    path: '/Right',
    name: 'Right',
    component: Right,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
