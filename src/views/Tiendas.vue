<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div style="display: flex;">
      <div class="MenuClass">
        <MenuLateral/>
      </div>
      <div style="display:flex; flex-direction:column; gap: 50px; margin-left: 15%">
        <div style="display: flex; flex-direction: column; gap: 30px; margin-top: 35px ">
          <div>
              <Tiendas/>
          </div>
        </div>
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
import Footer from "../components/Footer.vue";
import Tiendas from "../components/Tiendas.vue";


export default {
  name: "Products",
  components: {
    Navbar,
    MenuLateral,
    Footer,
    Tiendas,
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
</style>
 