<template>
  <div class="container">
    <div class="header">
      <img :src="neoron_logo" alt="Neoron Logo" class="logo" />
      <h1>NEORON</h1>
    </div>

    <div class="content-table">
      <nav class="nav-button">
        <router-link to="/Cadastro">
          <button type="button" class="btn btn-primary">Cadastrar voô</button>
        </router-link>
      </nav>
      <table class="table">
        <thead class="table-header">
       
          <tr>
               <!-- TH SÃO OS NOMES DAS COLUNAS DA TABELA -->
            <th scope="col">Código</th>
            <th scope="col">Vôo</th>
            <th scope="col">Embarque</th>
            <th scope="col">Destino</th>
            <th scope="col">Data</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
               <!-- TD SÃO AS LINHAS DA TABELA -->
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>15/02/2024</td>
            <td class="btns-actions">
              <router-link to="/edit">
                <button class="btn btn-sm btn-primary" @click="editItem(1)">
                  <font-awesome-icon icon="edit" />
                </button>
              </router-link>

              <button class="btn btn-sm btn-danger" @click="deleteItem(1)">
                <font-awesome-icon icon="trash-alt" />
              </button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import neoron_logo from '../assets/neoron_logo.jpeg'

export default {
  methods: {
    editItem(id) {
      console.log(`Editing item ${id}`)
    },
    deleteItem(id) {
      console.log(`Deleting item ${id}`)
    }
  },
  data() {
    return {
      neoron_logo
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin-top: 2rem;
}

.logo {
  width: 48px;
  height: 48px;
}

.content-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #dee8fd;
  padding: 3rem;
  border-radius: 4px;
  border: 1px solid #aec6fb;
}

.nav-button {
  display: flex;
  justify-content: flex-end;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #f3f6ff;
  border: 1px solid #aec6fb;
  border-radius: 4px;
}

.table-header {
  background-color: #4a6fa5;
  color: #ffffff;
}

th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #aec6fb;
}

th {
  font-weight: bold;
}

.btns-actions {
  display: flex;
  gap: 11px;
}
</style>
