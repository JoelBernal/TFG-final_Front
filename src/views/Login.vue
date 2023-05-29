<template>
  <div>
    <div class="divNavbar">
      <Navbar />
    </div>

    <div>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Navbar from "../components/Navbar.vue";


export default {
  name: "Home",
  components: {
    Login,
    Navbar,
  },
};
</script>

<style>
  .divNavbar{
    position: fixed;
  }
</style>
