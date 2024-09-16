<template>
    <div class="conteiner">
        <h1>NEORON</h1>
        <nav>
          
          <router-link to="/Cadastro">
            <button type="button" class="button-link">Cadastro</button>
          </router-link>
          
          <router-link to="/Voo">
            <button type="button" class="button-link">Vôos</button>
          </router-link>
          
          <router-link to="/Right">
            <button type="button" class="button-link">Right</button>
          </router-link>
        </nav>
      
      <router-view/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style scoped>

  .conteiner {
    width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #B8E6DE;
  border-radius: 10px;
  margin-top: 2rem;
  



  }
  
  .button-link {
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
  
  button:hover {
    opacity: 0.8; /* Efeito ao passar o mouse */
  }
  </style>