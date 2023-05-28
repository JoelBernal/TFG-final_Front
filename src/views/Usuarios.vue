<template>
    <div>
      <div>
        <Navbar />
      </div>
  
 
        <div style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%">
          <div style="display: flex; gap: 30px; margin-top: 35px ">
            <Cards2></Cards2>
          </div>
        </div>
      </div>
  
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Cards2 from "../components/Cards2.vue";
  
  export default {
    name: "Home",
    components: {
      Navbar,
      Cards2,
      
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
   