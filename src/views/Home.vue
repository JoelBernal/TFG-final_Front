<template>
  <div>
    <Navbar />
    <Carrusel />
    <div style="display: flex; justify-content: space-evenly; flex-direction: column;">
      <div style="display: flex; justify-content: center; margin-top: 10px; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 20px;">
        <h1>LO MAS VENDIDO</h1>
      </div>
      <div style="display: flex;">
        <CardHome style="width: 50%" />
        <CardHome style="width: 50%" />
      </div>
      <div style="display: flex; justify-content: center; margin-top: 10px; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 20px;">
        <h1>OFERTAS SEMANALES</h1>
      </div>
      <div>
        <CardHome style="width: 100%;" />
      </div>
      
    </div>
    

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carrusel from "../components/Carrusel.vue";
import Footer from "../components/Footer.vue";
import CardHome from "../components/CardHome.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carrusel,
    CardHome,
    Footer,
  },
};
</script>


<style></style>