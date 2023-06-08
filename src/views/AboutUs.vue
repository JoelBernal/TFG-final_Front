<template>
  <div>
    <Navbar />
    <Aboutus />

    <Grafica />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Grafica from "../components/Grafica.vue";
import Aboutus from "../components/Aboutus.vue";

export default {
  name: "AboutUs",
  components: {
    Navbar,
    Grafica,
    Footer,
    Aboutus,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>

</style>
