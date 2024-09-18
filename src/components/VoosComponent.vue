<!-- src/components/VoosComponent.vue -->
<template>
    <div>
      <h1>Gerenciar Voos</h1>
      
      <!-- Formulário para criar voo -->
      <form @submit.prevent="createVoo">
        <!-- Campos para detalhes do voo -->
        <input v-model="novoVoo.codigo_voo" placeholder="Código do Voo" />
        <input v-model="novoVoo.origem_cidade" placeholder="Origem (Cidade)" />
        <input v-model="novoVoo.destino_cidade" placeholder="Destino (Cidade)" />
        <!-- Botão de criar voo -->
        <button type="submit">Criar Voo</button>
      </form>
  
      <!-- Listagem de voos -->
      <ul>
        <li v-for="voo in voos" :key="voo.id">
          {{ voo.codigo_voo }} - {{ voo.origem_cidade }} -> {{ voo.destino_cidade }}
          <button @click="deleteVoo(voo.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

export default {
  data() {
  return {
    voos: [],
    novoVoo: {
      codigo_voo: '',
      origem_cidade: '',
      destino_cidade: '',
      data: ''
    }
  };
},
methods: {
  async fetchVoos() {
    try {
      const response = await axios.get('/voos/view'); // Nota: sem o http://localhost:3000
      this.voos = response.data; // Atualiza a lista de voos
    } catch (error) {
      console.error('Erro ao buscar voos:', error);
    }
  },
  async createVoo() {
    try {
      await axios.post('/voos/create', this.novoVoo); // Nota: sem o http://localhost:3000
      this.$router.push('/'); // Redireciona após criação
    } catch (error) {
      console.error('Erro ao criar voo:', error);
    }
  },
  async deleteVoo(id) {
    try {
      await axios.delete(`/voos/delete/${id}`); // Nota: sem o http://localhost:3000
      this.fetchVoos(); // Atualiza a lista de voos após deletar
    } catch (error) {
      console.error('Erro ao deletar voo:', error);
    }
  }
},
mounted() {
  this.fetchVoos(); // Carrega os voos quando o componente for montado
}

  };
