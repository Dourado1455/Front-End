// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faTrashAlt);

const app = createApp(App);

app.use(router); 
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon)
