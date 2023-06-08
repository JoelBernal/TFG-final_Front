<template>
    <div>
      <div class="divNavbar">
        <Navbar />
      </div>
  
      <div style="margin-top: 30px; margin-bottom: 30px;">
        <FormuPago />
      </div>
      <Footer />
    </div>
    
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import FormuPago from "../components/FormuPago.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    name: "Home",
    components: {
        Navbar,
        FormuPago,
        Footer,
    },
  };
  </script>
  
  <style>
    .divNavbar{
      position: fixed;
    }
  </style>
  