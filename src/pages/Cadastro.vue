<template>
<div class="center">
<div class="text-container">
    <h1>CADASTRO</h1>
   
  </div>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nomenpm </label>
    <input type="name" class="form-control" id="Name">
      </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Local de Partida </label>
    <input type="name" class="form-control" id="Cidade">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Local de Destino </label>
    <input type="name" class="form-control" id="Cidade">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Data de Vôo</label>
    <input type="date" class="form-control" id="Name">
      </div>
  <button type="submit" class="btn-primary">Confirmar</button>
  
    <div>Nunca compartilharemos seus dados com ninguém.</div>
</form>
</div>

</template>

<script>

</script>

<style scoped>
.center {
  width: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.text-container{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color:rgb(0, 0, 0);
  padding: 10px;
  text-align: center;
  font-weight: bold;
  text-align: center;
  
}
.mb-3 {
  width: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
};

.btn-primary{
  background-color: #cf9f57;
    background-size: 50rem;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    margin-right: 8px; 
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    
}


</style>