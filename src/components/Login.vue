<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="login-container" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Iniciar Sesion en Librerias Paco</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon >fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"

                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Has olvidado la contraseña ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn style="margin-bottom: 20px" rounded color="teal accent-3" to="/home" dark>Iniciar Sesion</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hola, Amigo!</h1>
                        <h5
                          class="text-center"
                        >Introduce tus datos personales y empieza a trabajar con nosotros</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">REGISTRARSE</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bienvenido de nuevo!</h1>
                        <h5
                          class="text-center"
                        >Para estar conectado con nosotros por favor, entra con tu informacion personal</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">INICIAR SESION</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Crear cuenta</h1>
                        <div class="text-center mt-4">
                          <v-btn id="botones" class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn id="botones" class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn id="botones" class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <v-form>
                          <v-text-field
                            label="UserName"
                            name="UserName"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            type="text"
                            color="teal accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn style="margin-bottom: 20px" rounded color="teal accent-3" to="/home" dark>Registrarse</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    
  }),
  props: {
    source: String
  }
};
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.v-main{
  padding: 0px;
}

.v-application .teal--text.text--accent-3{
  color :#80461b !important;
}

.v-application .teal {
    background-color: #80461b !important;
    border-color: #80461b !important;
}

.v-application .teal.accent-3 {
    background-color: #80461b !important;
    border-color: #80461b !important;
}

.v-application .mt-12 {
     margin-top: 80px !important; 
}

#botones{
  background-color: #80461b !important;
}


</style>