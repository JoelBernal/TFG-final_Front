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
        <div style=" gap: 30px; margin-top: 35px ">
          <InfoUsuario></InfoUsuario>
        </div>
      </div>
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MenuLateral from "../components/MenuLateral.vue";
import InfoUsuario from "../components/InfoUsuario.vue";


export default {
  name: "Home",
  components: {
    Navbar,
    InfoUsuario,
    MenuLateral,
    
  },
  props: {
    source: String,
  },
};
</script>
 
<style scoped>
.MenuClass {
  height: auto;
  max-height: 100%;
}

div[data-v-2c902354] {
    display: block !important;
}
</style>
 