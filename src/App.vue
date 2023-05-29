<template>
  <v-app>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
import {mapActions, mapState } from 'vuex';
export default {
  name: 'App',
  components: {},
  created(){
    this.fetchLibros();
    this.loginFromCookies();
  },

  methods:{
    ...mapActions(['fetchLibros', 'login']),
    loginFromCookies(){
      let idUser = this.$cookies.get("idUsuario");
      if (idUser != null) {
        this.login(idUser);
      }
    }
    
  },
  computed:{
    ...mapState(['usuario'])
  },

   data: () => ({
     datos: []
   }),
};
</script>

