<template>
  <v-app>
    <v-footer color="green" dark>
      <v-row justify="center" class="my-4 text-center">
        <v-col cols="12" style="font-family: Georgia, 'Times New Roman', Times, serif"><h3>Bienvenido a Librerias Paco. <br> Aqui puedes encontrar todos los libros que desees con opcion de compra.</h3>
        </v-col>
        <v-col cols="12">
          <v-btn v-for="icon in icons" :key="icon" text dark>
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </v-col>

      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        'mdi-youtube',
      ],
    };
  },
};
</script>

<style sc>

.v-application--wrap {
    flex: 1 1 auto;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    position: relative;
    background-color: antiquewhite
    }

    .container {
    max-width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
}

.v-application .green  {
 
  background-color: #80461b !important;
}

.logoImgFooter{
  width: 100px;
}

</style>