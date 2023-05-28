<template>
  <div>
    <div class="divNavbar">
      <Navbar />
    </div>

    <div>
      <Register></Register>
    </div>
  </div>
</template>

<script>
import Register from "../components/Register.vue";
import Navbar from "../components/Navbar.vue";


export default {
  name: "Home",
  components: {
      Register,
      Navbar
  },
};
</script>


<style>
  .divNavbar{
    position: fixed;
  }
</style>