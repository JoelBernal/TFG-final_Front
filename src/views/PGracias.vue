<template>
    <div class="page-container">
      <div class="content-wrap">
        <Navbar />
  
        <div>
            <Gracias/>
        </div>
      </div>
  
      <Footer/>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Gracias from "../components/Gracias.vue";
  import Footer from "../components/Footer.vue";
  
  
  export default {
    name: "Home",
    components: {
      Navbar,
      Footer,
      Gracias,
    },
    props: {
      source: String,
    },
  };
  </script>
   
  <style>
  .payment-container{
    margin-top: 15px;
  }
  
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content-wrap {
    flex: 1 0 auto; 
  }
  
  .MenuClass {
    height: auto;
    max-height: 100%;
  }
  
  .main-content {
    display: flex;
    gap: 50px;
    margin-left: 15%;
    align-items: center; /* añadido para centrar verticalmente el carrito */
  }
  
  .cart-container {
    display: flex;
    flex-direction: column;
  }
  
  footer {
    flex-shrink: 0;
  }
  </style>
  