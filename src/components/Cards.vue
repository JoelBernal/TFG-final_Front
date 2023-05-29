<template>
  <v-container fluid>
    <div class="botonOrden">
      <v-button
        id="orden"
        @click="
          OrdenarPrecioPorDefecto();
          dialog = true;
        "
        >Ordenar por defecto</v-button
      >
      <v-button
        id="orden"
        @click="
          OrdenarPrecioMenorMayor();
          dialog = true;
        "
        >Ordenar por Precio: Mayor a menor</v-button
      >
      <v-button
        id="orden"
        @click="
          OrdenarPrecioMayorMenor();
          dialog = true;
        "
        >Ordenar por Precio: Menor a mayor</v-button
      >
    </div>

    <div>
      <v-row no-gutters>
        <v-col v-for="item in libro" :key="item.id" cols="12" sm="4">
          <v-card
            id="tarjeta"
            style="margin-bottom: 30px"
            class="mx-auto"
            max-width="400"
            tile
          >
            <v-img
              class="align-end text-white"
              height="200"
              :src="item.image"
              cover
            >
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.Yhvj0zPqOsS3B2ZFeha44gAAAA&pid=Api&P=0"
                alt="foto libros"
              />
              <v-card-title>{{ item.titulo }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-4"
              >Fecha de publicacion:
              {{ item.fechaPublicacion }}</v-card-subtitle
            >

            <v-card-text>
              <div>Autor: {{ item.autor }}</div>
              <div>Categorias: {{ item.categorias }}</div>
              <div>Paginas: {{ item.paginas }}</div>
              <div>Precio: {{ item.precio }}</div>
              <div>Id: {{ item.id }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" @click="comprarLibro(item)">Comprar</v-btn>
              <v-btn color="red" @click="eliminarLibro(item.id)">Borrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="text-center">
      <v-dialog v-model="dialog" width="auto">
        <v-card>
          <v-card-text>
            <h3>Orden de los libros cambiado, disfrute de nuestro catálogo</h3>
          </v-card-text>
          <v-card-actions style="color: white">
            <v-btn color="#80461b " block @click="dialog = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import store from "@/store/store.js";
import { mapState, mapActions } from "vuex";


export default {
  name: "Cards",
  components: {

  },

  data () {
      return {
        dialog: false,
      }
    },

  methods: {
    ...mapActions([store.dispatch("fetchLibros")]),
    ...mapActions(["eliminarLibro"]),
    ...mapActions(["OrdenarPrecioMayorMenor"]),
    ...mapActions(["OrdenarPrecioMenorMayor"]),
    ...mapActions(["OrdenarPrecioPorDefecto"]),
    ...mapActions(["addToCarrito"]),
    comprarLibro(libro) {
      this.addToCarrito(libro);

      // Mostrar notificación
      this.$notify({
      title: '¡Libro añadido al carrito!',
      text: 'El libro ha sido agregado correctamente al carrito de compras.',
      type: 'success',
  });
    },
    eliminarLibro(id) {
      // Lógica para eliminar un libro
      this.eliminarLibro(id);
    },
    // Resto de métodos

  },
  computed: {
    user() {
      return this.libro;
    },
    ...mapState(["libro"]),
  },
};
</script>

<style>
@media screen and (max-width: 400px) {
  .v-card__subtitle {
    font-size: 14px;
  }

  .v-card__text div {
    font-size: 12px;
  }
}

.div.container.container--fluid {
  margin-left: 300px;
}

#orden {
  margin: 60px;
  margin-bottom: 50px;
}

.botonOrden {
  margin-bottom: 30px;
}

.v-btn__content {
}

.v-card__actions {
  display: flex;
  justify-content: center;
}

.theme--light.v-btn {
  color: white;
}
</style>
