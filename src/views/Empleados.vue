<template>
    <div>
      <div>
        <Navbar />
      </div>
  
  
        <div style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%">
          <div style="display: flex; gap: 30px; margin-top: 35px ">
            <Empleados/>
          </div>
        </div>
      </div>
  
  </template>
  
  <script>
  import Navbar from "../components/Navbar.vue";
  import Empleados from "../components/Empleados.vue";
  import { mapState } from "vuex";
  
  export default {
    name: "Home",
    components: {
      Navbar,
      Empleados,
  
    },
    props: {
      source: String,
    },
    computed : {
      ...mapState(["usuario"])
    },
    mounted(){
      this.checkAdmin(this.usuario);
  
    },
    methods : {
      checkAdmin(usuario){
        if (!usuario || usuario.rol !== "admin") {
          this.$router.replace("/home")
        }
      }
    }
  };
  </script>
   
  <style>
  .MenuClass {
    height: auto;
    max-height: 100%;
  }
  </style>
   