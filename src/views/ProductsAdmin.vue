<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div style="background-color: antiquewhite">
      <div class="MenuClass">
        <MenuLateralAdmin/>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: 50px;
          margin-left: 15%;
        "
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 35px;
          "
        >
          <div class="menuProductos">
            <h1 id="tituloProductos">PRODUCTOS</h1>
            <ProductosAdmin />
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MenuLateralAdmin from "../components/MenuLateralAdmin.vue";
import ProductosAdmin from "../components/ProductosAdmin.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Products",
  components: {
    Navbar,
    ProductosAdmin,
    MenuLateralAdmin,
    Footer,
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
#tituloProductos {
  text-align: 
  center; color: #333; 
  font-size: 48px; 
  font-family: 'Arial', sans-serif; 
  text-shadow: 2px 2px 4px rgba(1, 9, 10, 0.7); 
  padding: 10px;
}

@media (max-width: 1650px) {
  .menuProductos {
    margin-left: 40px;
  }
}
@media (max-width: 1400px) {
  .menuProductos {
    margin-left: 40px;
  }
}

</style>