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
              <v-text-field v-model="nombreUser" label="Nombre de usuario" :rules="[rules.required]" outlined></v-text-field>
              <v-text-field v-model="correo" label="Correo electrónico" :rules="[rules.required, rules.email]" outlined></v-text-field>
              <v-text-field v-model="contrasenya" label="Contraseña" :rules="[rules.required]" outlined type="password"></v-text-field>
              <v-text-field v-model="confirmPassword" label="Confirmar contraseña" :rules="[rules.required]" outlined
                type="password"></v-text-field>
              <v-btn color="primary" block type="submit">Registrarse</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="6" style="margin: 10px;">

        <v-card-title class="text-center">
          <h2>Bienvenido a Librerías Paco</h2>
        </v-card-title>
        <v-card-text>
          <p>La Tienda de Libros es el paraíso para los amantes de la lectura. Somos una tienda dedicada y especializada
            en ofrecer una amplia variedad de libros para todos los gustos, edades y preferencias. Nuestro catálogo abarca
            desde bestsellers internacionales hasta los clásicos de la literatura, pasando por novelas de ficción, obras
            de no ficción, libros de texto, libros ilustrados y mucho más.</p>

          <p>Nuestro compromiso es poner el mundo de la lectura al alcance de todos. Ya sea que prefieras los emocionantes
            thrillers, los romances conmovedores, las fascinantes novelas de ciencia ficción, los libros de autoayuda
            inspiradores o los volúmenes educativos, estamos seguros de que encontrarás el libro perfecto para ti en
            nuestra tienda.</p>

          <p>Además de proporcionar una amplia selección de libros, nos enorgullece ofrecer un excelente servicio al
            cliente. Nuestro personal amigable y conocedor está siempre disponible para ayudarte a encontrar lo que
            buscas, responder a tus preguntas y ofrecerte recomendaciones personalizadas basadas en tus gustos de lectura.
          </p>

          <p>Te invitamos a explorar nuestra tienda y descubrir la magia de la lectura. Aquí en la Tienda de Libros,
            creemos que cada libro tiene el potencial de abrir la mente, inspirar el corazón y alimentar el alma.
            Esperamos verte pronto y ayudarte a descubrir tu próxima gran lectura.</p>
        </v-card-text>

      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" color="white">
          <b id="message"> {{ snackbarMessage }} </b>
            <v-btn color="#80461b" text @click="snackbar = false">
              Cerrar
            </v-btn>
          </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      snackbar: false,
      snackbarMessage: '',
      nombreUser: '',
      correo: '',
      contrasenya: '',
      confirmPassword: '',

      rules: {
        required: value => !!value || 'Este campo es requerido',
        email: value => {
          const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
          return pattern.test(value) || 'Correo electrónico inválido';
        },
        password: value =>{
          !!value || 'Este campo es requerido'
        }
      }
    };
  },
  methods: {
    ...mapActions(['registerUser']),
    async register() {
      if (this.contrasenya !== this.confirmPassword) {
        console.log('Las contraseñas no coinciden');
        this.snackbarMessage = 'Las contraseñas no coinciden';
        this.snackbar = true;
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
        this.snackbarMessage = 'Error al registrar al usuario';
        this.snackbar = true;
      }
    }
  }
};
</script>

<style scoped>
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

.v-application .primary{
  background-color: #80461b !important ;
}

.theme--dark.v-snack__wrapper {
    color: #80461b !important;
}

#message{
  color: #80461b !important;
}

</style>
