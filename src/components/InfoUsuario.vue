<template >
  <div style="padding: 10%; width: 700px;">
  <v-card style="margin-left: 20%; ">
    <v-card-title class="primary mb-6" id="tittle-form">
      <h2 class="text-white" >Ajustes de Perfil</h2>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userInfo.NombreUsuario.value"
            label="Nombre"
            outlined
            :readonly="!editing || !userInfo.NombreUsuario.editable"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userInfo.Correo.value"
            label="Correo Electrónico"
            outlined
            :readonly="!editing || !userInfo.Correo.editable"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="userInfo.Rol.value"
            label="Rol"
            outlined
            :readonly="!editing || !userInfo.Rol.editable"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userInfo.Saldo.value"
            label="Saldo"
            outlined
            :readonly="!editing || !userInfo.Saldo.editable"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="userInfo.FechaCreacion.value"
            label="Fecha de Creación"
            outlined
            :readonly="!editing || !userInfo.FechaCreacion.editable"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <template v-if="!editing">
        <v-btn color="#80461b" @click="editProfile">Editar</v-btn>
        <v-btn color="red" @click="logOut">Cerrar Sesión</v-btn>
      </template>
      <template v-else>
        <v-btn color="#80461b" @click="saveProfile">Guardar</v-btn>
        <v-btn color="error" @click="cancelEdit">Cancelar</v-btn>
      </template>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
import { mapState } from "vuex";
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      userInfo: {
        NombreUsuario: { value: "", editable: true },
        Correo: { value: "", editable: true },
        Rol: { value: "", editable: false },
        Saldo: { value: "", editable: false },
        FechaCreacion: { value: "", editable: false },
      },
      editing: false,
      originalUserInfo: null,
    };
  },
  computed: {
    ...mapState(["usuario"]),
  },

  mounted(){
    this.loadUser(this.usuario);
  },

  methods: {
    editProfile() {
      this.editing = true;
      // Guarda una copia de seguridad de la información original del usuario antes de la edición
      this.originalUserInfo = { ...this.userInfo };
    },
    saveProfile() {
      // Realiza acciones para guardar los cambios en la información del usuario
      console.log("Guardar cambios de perfil");
      this.editing = false;
      this.originalUserInfo = null;
    },
    cancelEdit() {
      // Restaura la información original del usuario y cancela la edición
      console.log("Cancelar edición de perfil");
      this.editing = false;
      this.userInfo = { ...this.originalUserInfo };
      this.originalUserInfo = null;
    },
    loadUser(usuario){
      console.log(usuario)
      this.userInfo.Correo.value = usuario.correo;
      this.userInfo.NombreUsuario.value = usuario.nombreUser;
      this.userInfo.Rol.value = usuario.rol;
      this.userInfo.Saldo.value = usuario.saldo;
      this.userInfo.FechaCreacion.value = usuario.fechaCreacion;
    },
    logOut(usuario){
      console.log(usuario)
      Cookies.remove('idUsuario');
      this.$router.push('/home');
      location.reload();

    }
  },
  
};
</script>

<style scoped>
.primary {
  background-color: #80461b !important;
  color: #ffffff;
}

#tittle-form{
  background-color: #80461b !important;
}
</style>
