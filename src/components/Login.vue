<template>
  <v-container fluid class="fill-height">
    <v-row class="justify-center align-center fill-height">
      <v-col cols="12" sm="5" md="5" lg="5" class="border-right">
        <v-card class="elevation-12">
          <v-card-title class="text-center">
            <h2>Iniciar Sesión</h2>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="loginFunction">
              <v-text-field v-model="email" label="Correo electrónico" :rules="[rules.required, rules.email]" outlined></v-text-field>
              <v-text-field v-model="password" label="Contraseña" :rules="[rules.required]" outlined type="password"></v-text-field>
              <v-btn color="primary" block type="submit">Iniciar Sesión</v-btn>
            </v-form>
          </v-card-text>

          <v-snackbar v-model="snackbar" color="white">
          <b> {{ snackbarMessage }} </b>
            <v-btn color="#80461b" text @click="snackbar = false">
              Cerrar
            </v-btn>
          </v-snackbar>
        </v-card>
      </v-col>
      
      <v-col cols="12" sm="5" md="5" lg="5" style="margin: 10px;">
      
          <v-card-title class="text-center">
            <h2>Bienvenido a Librerías Paco</h2>
          </v-card-title>
          <v-card-text >
  <p>La Tienda de Libros es el paraíso para los amantes de la lectura. Somos una tienda dedicada y especializada en ofrecer una amplia variedad de libros para todos los gustos, edades y preferencias. Nuestro catálogo abarca desde bestsellers internacionales hasta los clásicos de la literatura, pasando por novelas de ficción, obras de no ficción, libros de texto, libros ilustrados y mucho más.</p>

  <p>Nuestro compromiso es poner el mundo de la lectura al alcance de todos. Ya sea que prefieras los emocionantes thrillers, los romances conmovedores, las fascinantes novelas de ciencia ficción, los libros de autoayuda inspiradores o los volúmenes educativos, estamos seguros de que encontrarás el libro perfecto para ti en nuestra tienda.</p>

  <p>Además de proporcionar una amplia selección de libros, nos enorgullece ofrecer un excelente servicio al cliente. Nuestro personal amigable y conocedor está siempre disponible para ayudarte a encontrar lo que buscas, responder a tus preguntas y ofrecerte recomendaciones personalizadas basadas en tus gustos de lectura.</p>

  <p>Te invitamos a explorar nuestra tienda y descubrir la magia de la lectura. Aquí en la Tienda de Libros, creemos que cada libro tiene el potencial de abrir la mente, inspirar el corazón y alimentar el alma. Esperamos verte pronto y ayudarte a descubrir tu próxima gran lectura.</p>
</v-card-text>
       
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      snackbar: false,
      snackbarMessage: '',
      email: '',
      password: '',
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
    ...mapActions(["fetchLogin"]),

    async loginFunction() {
      try {
        await this.fetchLogin({ correo: this.email, contrasenya: this.password })

        console.log('Iniciando sesión...');
        console.log('Correo electrónico:', this.email);
        console.log('Contraseña:', this.password);
        this.$router.push('/InfoUsuario');

      } catch (error) {
        console.error(error);
        this.snackbarMessage = 'Los datos introducidos son incorrectos';
        this.snackbar = true;
      }
    }
  }
  , computed: {
    ...mapState(["usuario"]),
  },
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
  background-color: #1976D2;
  color: #ffffff;
  padding: 20px;
}

.v-card-text {
  padding: 20px;
}
.v-application .primary{
  background-color: #80461b !important ;
}

 .v-snack.v-snack--active.v-snack--bottom.v-snack--has-background {
    color: #80461b !important;
}
</style>
