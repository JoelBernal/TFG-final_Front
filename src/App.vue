<template>
  <v-app>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {},
  created(){
    this.fetchLibros();
  },

  methods:{
    ...mapActions(['fetchLibros'])
   
    
  },

   data: () => ({
     datos: []
   }),
};
</script>

