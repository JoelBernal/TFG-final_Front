<template>
  <v-container fluid class="fill-height">
    <v-row class="justify-center align-center fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12">
          <v-card-title class="text-center">
            <h2>Iniciar Sesión</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="loginFunction">
              <v-text-field v-model="email" label="Correo electrónico" outlined></v-text-field>
              <v-text-field v-model="password" label="Contraseña" outlined type="password"></v-text-field>
              <v-btn color="primary" block type="submit">Iniciar Sesión</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(["fetchLogin"]),

    async loginFunction() {
      await this.fetchLogin({correo : this.email, contrasenya : this.password})
      // Realiza las acciones necesarias para iniciar sesión
      // Aquí puedes agregar tu lógica para verificar el inicio de sesión
      console.log('Iniciando sesión...');
      console.log('Correo electrónico:', this.email);
      console.log('Contraseña:', this.password);

      // Realiza las acciones adicionales necesarias, como enviar los datos al servidor, verificar la autenticidad, etc.
    }
  }
  ,computed: {
    ...mapState(["usuario"]),
  },
};
</script>

<style>
.fill-height {
  height: 100vh;
}

.v-card {
  border-radius: 10px;
}

.v-card-title {
  background-color: #1976D2;
  color: #ffffff;
  padding: 20px;
}

.v-card-text {
  padding: 20px;
}

</style>
