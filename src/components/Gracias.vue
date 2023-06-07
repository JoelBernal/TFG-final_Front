<template>
    <div class="thanks-page">
      <h1>¡Gracias por su compra!</h1>
      <p>Su pedido ha sido procesado y pronto recibirá un correo electrónico con los detalles de su compra.</p>
      <p>Si tiene alguna pregunta, no dude en <a href="/contact">contactarnos</a>.</p>
      <button @click="goHome">Volver a la página principal</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Gracias",
    methods: {
      goHome() {
        this.$router.push('/');
      }
    },
  };
  </script>
  
  <style scoped>
  .thanks-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    color: #80461b;
  }
  
  p {
    font-size: 1.2em;
    margin: 20px 0;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1.2em;
    background-color: #80461b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #80461b;
  }
  </style>
  