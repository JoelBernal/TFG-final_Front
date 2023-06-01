
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
        <Carrito></Carrito>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MenuLateral from "../components/MenuLateral.vue";
import Carrito from "../components/Carrito.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carrito,
    MenuLateral,
    Footer,
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
 