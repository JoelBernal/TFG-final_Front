<template>
  <div>
    <Navbar />
    <Aboutus />

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Aboutus from "../components/Aboutus.vue";

export default {
  name: "AboutUs",
  components: {
    Navbar,
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