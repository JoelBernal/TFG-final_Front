<template>
  <v-card>
    <v-card-title class="primary mb-6">
      <h2 class="text-white">Ajustes de Perfil</h2>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userInfo.name"
            label="Nombre"
            outlined
            :readonly="!editing"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userInfo.email"
            label="Correo Electrónico"
            outlined
            :readonly="!editing"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="userInfo.address"
            label="Nombre de usuario"
            outlined
            :readonly="!editing"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userInfo.city"
            label="Rol"
            outlined
            :readonly="!editing"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userInfo.country"
            label="Saldo"
            outlined
            :readonly="!editing"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <template v-if="!editing">
        <v-btn color="primary" @click="editProfile">Editar</v-btn>
      </template>
      <template v-else>
        <v-btn color="success" @click="saveProfile">Guardar</v-btn>
        <v-btn color="error" @click="cancelEdit">Cancelar</v-btn>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: 'JoehCena',
        city: 'Administrador',
        country: '20$',
      },
      editing: false,
      originalUserInfo: null,
    };
  },
  methods: {
    editProfile() {
      this.editing = true;
      // Guarda una copia de seguridad de la información original del usuario antes de la edición
      this.originalUserInfo = { ...this.userInfo };
    },
    saveProfile() {
      // Realiza acciones para guardar los cambios en la información del usuario
      console.log('Guardar cambios de perfil');
      this.editing = false;
      this.originalUserInfo = null;
    },
    cancelEdit() {
      // Restaura la información original del usuario y cancela la edición
      console.log('Cancelar edición de perfil');
      this.editing = false;
      this.userInfo = { ...this.originalUserInfo };
      this.originalUserInfo = null;
    },
  },
};
</script>

<style>
.primary {
  background-color: #1976D2;
  color: #ffffff;
}
</style>
