<template>
  <v-container fluid class="fill-height">
    <v-row class="justify-center align-center fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12">
          <v-card-title class="text-center">
            <h2>Registro de Usuario</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field v-model="nombreUser" label="Nombre de usuario" outlined></v-text-field>
              <v-text-field v-model="correo" label="Correo electrónico" outlined></v-text-field>
              <v-text-field v-model="contrasenya" label="Contraseña" outlined type="password"></v-text-field>
              <v-text-field v-model="confirmPassword" label="Confirmar contraseña" outlined type="password"></v-text-field>
              <v-btn color="primary" block type="submit">Registrarse</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      nombreUser: '',
      correo: '',
      contrasenya: '',
      confirmPassword: ''
    };
  },
  methods: {
    ...mapActions(['registerUser']),
    async register() {
      if (this.contrasenya !== this.confirmPassword) {
        console.log('Las contraseñas no coinciden');
        return;
      }

      try {
        const user = {
          nombreUser: this.nombreUser,
          correo: this.correo,
          contrasenya: this.contrasenya,
          saldo: 0,
          rol: 'user',
        };
        await this.registerUser(user);
        this.nombreUser = '';
        this.correo = '';
        this.contrasenya = '';
        this.confirmPassword = '';
      } catch (error) {
        console.error('Error al registrar al usuario:', error);
      }
    }
  }
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
  background-color: #512DA8;
  color: #ffffff;
  padding: 20px;
}

.v-card-text {
  padding: 20px;
}

</style>
