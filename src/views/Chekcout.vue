<template>
    <div>
      <div class="divNavbar">
        <Navbar />
      </div>
  
      <div>
        <FormuPago />
      </div>
      
    </div>
    
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import FormuPago from "../components/FormuPago.vue";
  
  
  export default {
    name: "Home",
    components: {
        Navbar,
        FormuPago,
    },
  };
  </script>
  
  <style>
    .divNavbar{
      position: fixed;
    }
  </style>
  