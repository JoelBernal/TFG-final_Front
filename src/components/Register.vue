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
              <v-text-field v-model="username" label="Nombre de usuario" outlined></v-text-field>
              <v-text-field v-model="email" label="Correo electrónico" outlined></v-text-field>
              <v-text-field v-model="password" label="Contraseña" outlined type="password"></v-text-field>
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
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      // Realiza las acciones necesarias para registrar al usuario
      // Aquí puedes agregar tu lógica para verificar y guardar los datos de registro
      if (this.password !== this.confirmPassword) {
        // Manejo del caso en que las contraseñas no coincidan
        console.log('Las contraseñas no coinciden');
        return;
      }

      console.log('Registrando usuario...');
      console.log('Nombre de usuario:', this.username);
      console.log('Correo electrónico:', this.email);
      console.log('Contraseña:', this.password);

      // Realiza las acciones adicionales necesarias, como enviar los datos al servidor, almacenarlos en la base de datos, etc.
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
