<template>
  <div id="app">
    <!-- Exibe o componente Home -->
    <div class="content">
      <Home />
    </div>
  </div>
</template>

<script>
import Home from './pages/Home.vue'; // Caminho relativo para o componente

export default {
  name: 'App',
  components: {
    Home, // Registrar o componente para ser utilizado
  },
};
</script>

<style>


</style>

