<template>
  <div class="divComponenteGeneral">
    <v-card class="divAjustes">
      <v-card-title class="primary mb-6" id="tittle-form">
        <h2 class="text-white">Ajustes de Perfil</h2>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="userInfo.NombreUsuario.value" label="Nombre" outlined
              :readonly="!editing || !userInfo.NombreUsuario.editable"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="userInfo.Correo.value" label="Correo Electrónico" outlined
              :readonly="!editing || !userInfo.Correo.editable"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="userInfo.Rol.value" label="Rol" outlined
              :readonly="!editing || !userInfo.Rol.editable"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="userInfo.Saldo.value" label="Saldo" outlined
              :readonly="!editing || !userInfo.Saldo.editable"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="userInfo.FechaCreacion.value" label="Fecha de Creación" outlined
              :readonly="!editing || !userInfo.FechaCreacion.editable"></v-text-field>
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
          <v-btn color="#80461b" @click="saveProfile()">Guardar</v-btn>
          <v-btn color="error" @click="cancelEdit">Cancelar</v-btn>
        </template>
      </v-card-actions>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Datos cambiados</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#80461b" text @click="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
    <v-card class="divInfoLibrosCliente">
      <v-card-title>
        <h2>Mis libros comprados:</h2>
      </v-card-title>
      <v-card-text>
        <table>
          <tbody>
            <tr v-for="(libro, index) in librosDelCliente" :key="index">
              <td>{{ libro.nombreLibro }}</td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
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
      dialog: false,
    };
  },
  computed: {
    ...mapState(["usuario"]),
    ...mapGetters(["libroCliente"]),

    librosDelCliente() {
      console.log(this.$store.state.LibrosClientes);
      const idCliente = this.usuario.id;
      console.log(idCliente);// Obtén el id del cliente actual desde el state de Vuex
      let librosFiltrados = this.$store.state.LibrosClientes.filter(libro => libro.idCliente === idCliente);
      console.log('librosFiltrados:', librosFiltrados);
      
      return librosFiltrados;
    }
  },
  mounted() {
    this.loadUser(this.usuario);
    this.$store.commit('CLEAR_LIBRO_CLIENTE');
    this.fetchLibroCliente(this.usuario.id).then(() => {
      console.log(this.libroCliente);
    });
  },
  methods: {
    ...mapActions(["updateUser", "fetchLibroCliente"]),


    ...mapMutations([
      
    ]),
    editProfile() {
      this.editing = true;
      // Guarda una copia de seguridad de la información original del usuario antes de la edición
      this.originalUserInfo = { ...this.userInfo };
    },
    saveProfile() {
      // Realiza acciones para guardar los cambios en la información del usuario
      console.log("Guardar cambios de perfil");

      // Aquí asumimos que tienes la id del usuario en algún lugar, ajusta esto a tu caso
      const userId = this.usuario.id;

      console.log(this.usuario); // Añade esta línea

      // Preparamos los datos del usuario que vamos a enviar a la API
      const updatedUserInfo = {
        id: userId,
        correo: this.userInfo.Correo.value,
        contrasenya: this.usuario.contrasenya,
        nombreUser: this.userInfo.NombreUsuario.value,
        rol: this.usuario.rol,
        saldo: this.usuario.saldo,
        fechaCreacion: this.usuario.fechaCreacion,
        // Agrega aquí el resto de los campos que desees actualizar
      };

      // Disparamos la acción para actualizar el usuario
      this.$store.dispatch('updateUser', { usuario: this.usuario, updatedUserInfo: updatedUserInfo });


      this.dialog = true;
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
    loadUser(usuario) {
      console.log(usuario)
      this.userInfo.Correo.value = usuario.correo;
      this.userInfo.NombreUsuario.value = usuario.nombreUser;
      this.userInfo.Rol.value = usuario.rol;
      this.userInfo.Saldo.value = usuario.saldo;
      this.userInfo.FechaCreacion.value = usuario.fechaCreacion;
    },
    logOut(usuario) {
      console.log(usuario)
      Cookies.remove('idUsuario');
      // this.clearCart();
      this.$router.push('/home');
      location.reload();
    }
  },
  watch: {
    usuario(newUser) { this.loadUser(newUser); }
  }



};

</script>

<style scoped>
.primary {
  background-color: #80461b !important;
  color: #ffffff;
}

#tittle-form {
  background-color: #80461b !important;
}

div[data-v-2c902354] {
    display: block !important;
}

.divComponenteGeneral{
  display: flex; 
  justify-content: space-between; 
  padding-left: 10%; 
  width: 100%;
  display: flex;
  flex-direction: row;
}

.divAjustes{
  width: 60%
}
.divInfoLibrosCliente{
  width: 40%; 
  margin-right: 80%;
  margin-top: 30px;
}
</style>