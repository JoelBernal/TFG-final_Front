<template>
    <v-container fluid>
    
      <div id="tarjetas">
        <v-row no-gutters >
          <v-col v-for="(item) in usuarios" :key="item.id" cols="12" sm="6">
            <v-card id="tarjeta" style="margin-bottom: 30px; " class="mx-auto" max-width="400" tile>
              <v-img class="align-end text-white" height="200" :src="item.image" cover>
                <img src="https://images.pexels.com/photos/1472841/pexels-photo-1472841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto cliente" />
                <v-card-title>{{ item.correo }}</v-card-title>
              </v-img>
              <v-card-subtitle class="pt-4">Nombre de Usuario: {{ item.nombreUser }}</v-card-subtitle>
  
              <v-card-text>
                <div>Id: {{ item.id }}</div>
                <div>Saldo: {{ item.saldo }}</div>
              </v-card-text>
  
              <v-card-actions>
                <v-btn color="orange">Ver compras</v-btn>
                <v-btn color="red" >Borrar Perfil</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
  
  

   
    </v-container>
  </template>
  
  <script>
  import store from "@/store/store.js";
  import { mapState, mapActions } from "vuex";
  
  
  export default {
    name: "Cards2",
    components: {
  
    },
  
    data () {
        return {
          dialog: false,
        }
      },
  
    methods: {

      ...mapActions([store.dispatch("fetchUsuarios")]),
  
   
  
  
    },
    computed: {
      user() {
        return this.usuarios;
      },
      ...mapState(["usuarios"]),
    },
  };
  </script>
  
  <style>


  @media screen and (max-width: 400px) {
    .v-card__subtitle {
      font-size: 14px;
    }
  
    .v-card__text div {
      font-size: 12px;
    }
  }
  
  #tarjetas{
    margin-right: 200px;
    
  }

  
  #orden {
    margin: 60px;
    margin-bottom: 50px;
  }
  
  .botonOrden {
    margin-bottom: 30px;
  }
  
  .v-btn__content {}
  
  .v-card__actions {
    display: flex;
    justify-content: center;
  }
  
  .theme--light.v-btn {
      color: white;
  }
  
  </style>