<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div style="background-color: antiquewhite">
      <div class="MenuClass">
        <MenuLateral></MenuLateral>
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
          <div>
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
import MenuLateral from "../components/MenuLateral.vue";
import ProductosAdmin from "../components/ProductosAdmin.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Products",
  components: {
    Navbar,
    ProductosAdmin,
    MenuLateral,
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
  display: flex;
  text-align: center;
  justify-content: center;
  color: #e9691e;
  font-size: 54px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  margin-bottom: 20px;
}

</style>