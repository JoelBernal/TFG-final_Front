
<template>
    <div>
      <div>
        <Navbar />
      </div>
  
      <div style="display: flex;">
        <div class="MenuClass">
          <MenuLateral></MenuLateral>
        </div>
        <div style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%">
            <tiendasForm/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import MenuLateral from "../components/MenuLateral.vue";
  import tiendasForm from "../components/tiendasForm.vue";
  
  export default {
    name: "Home",
    components: {
      Navbar,
      tiendasForm,
      MenuLateral,
    },
    props: {
      source: String,
    },
  };
  </script>
   
  <style>
  .MenuClass {
    height: auto;
    max-height: 100%;
  }
  </style>
   