<template>
  <div class="container">
    <h1>Cadastro de voôs</h1>
    <form class="form-cadastro" @submit.prevent="createVoo">
      <div class="mb-3">
        <label for="codigoVoo" class="form-label">Código do Voo</label>
        <input type="text" class="form-control" v-model="novoVoo.codigo_voo" id="codigoVoo" />
      </div>
      <div class="mb-3">
        <label for="origemCidade" class="form-label">Local de Partida (Cidade)</label>
        <input type="text" class="form-control" v-model="novoVoo.origem_cidade" id="origemCidade" />
      </div>
      <div class="mb-3">
        <label for="destinoCidade" class="form-label">Local de Destino (Cidade)</label>
        <input type="text" class="form-control" v-model="novoVoo.destino_cidade" id="destinoCidade" />
      </div>
      <div class="mb-3">
        <label for="dataVoo" class="form-label">Data de Vôo</label>
        <input type="date" class="form-control" v-model="novoVoo.data" id="dataVoo" />
      </div>
      <div class="buttons">
        <router-link to="/">
          <button class="btn btn-danger">Voltar</button>
        </router-link>
        <button type="submit" class="btn btn-primary">Confirmar</button>
      </div>
      <div>Nunca compartilharemos seus dados com ninguém.</div>
    </form>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
    novoVoo: {
      codigo_voo: '',
      origem_cidade: '',
      destino_cidade: '',
      data: ''
      }
    };
  },
  methods: {
    async createVoo() {
  try {
    await axios.post('/api/voos/create', this.novoVoo);
    this.novoVoo = { codigo_voo: '', origem_cidade: '', destino_cidade: '', data: '' }; // Limpa o formulário
    this.fetchVoos(); // Atualiza a lista de voos
  } catch (error) {}
    
    }
  } 
};
</script>

<style scoped>
/* Estilos */
</style>


<script></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10rem;
  height: 100vh;
  background: #dee8fd;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 9px;
}
</style>
