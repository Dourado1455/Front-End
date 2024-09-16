// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa o roteador

const app = createApp(App);

app.use(router); // Usa o roteador
app.mount('#app');
