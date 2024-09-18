<template>
  <div class="container">
    <h1>Editar voô</h1>
    <form class="form-cadastro">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Nome </label>
        <input type="name" class="form-control" id="Name" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Local de Partida
        </label>
        <input type="name" class="form-control" id="Cidade" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Local de Destino
        </label>
        <input type="name" class="form-control" id="Cidade" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Data de Vôo</label>
        <input type="date" class="form-control" id="Name" />
      </div>
      <div class="buttons">
        <router-link to="/">
          <button class="btn btn-danger">Voltar</button>
        </router-link>
         <button type="submit" class="btn btn-primary">Salvar alterações</button>
      </div>
    </form>
  </div>
</template>

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
