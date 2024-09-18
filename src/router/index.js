// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Cadastro from '../pages/Cadastro.vue';
import Home from '../pages/Home.vue';
import Editar from '../pages/Editar.vue';
const routes = [
  {
    path: '/Cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/edit',
    name: 'Editar Voô',
    component: Editar,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
