<template>
  <v-container fluid>
    <div style="display: flex; align-items: center">
      <v-text-field
        v-model="searchQuery"
        label="Buscar libros o autor"
        filled
        solo
        dense
        append-icon="mdi-magnify"
        class="search-bar"
        @keyup.enter="buscarLibro"
      ></v-text-field>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn id="orden" v-on="on">Ordenar por precio</v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="OrdenarPrecioPorDefecto(); dialog = true"
          >
            <v-list-item-title>Por defecto</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="OrdenarPrecioMenorMayor(); dialog = true"
          >
            <v-list-item-title>Mayor a menor</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="OrdenarPrecioMayorMenor(); dialog = true"
          >
            <v-list-item-title>Menor a mayor</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div>
      <v-row no-gutters>
        <v-col
          style="padding-left: 20px;"
          v-for="item in librosCards"
          :key="item.id"
          cols="12"
          sm="4"
        >
          <v-card
            id="tarjeta"
            style="margin-bottom: 30px; border: 2px solid black"
            class="mx-auto"
            max-width="400"
            tile
            @click="verDetalle(item)"
          >
            <v-img
              class="align-end text-white"
              height="200"
              :src="item.imagen"
              cover
            >
            </v-img>
            <v-card-title style="cursor: pointer;">
              {{ item.titulo }}
            </v-card-title>
            <v-card-subtitle class="pt-4">
              Fecha de publicacion: {{ item.fechaPublicacion }}
            </v-card-subtitle>

            <v-card-text>
              <div>Autor: {{ item.autor }}</div>
              <div>Categorias: {{ item.categorias }}</div>
              <div>Paginas: {{ item.paginas }}</div>
              <div>Precio: {{ item.precio }}</div>
              <div>Id: {{ item.id }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" @click="comprarLibro(item)">Ver detalles</v-btn>
              <v-btn color="red" @click="deleteLibro(item.id)">Borrar</v-btn>
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

    <v-dialog v-model="showPopup" width="800">
      <v-card v-if="selectedBook">
        <v-row no-gutters>
          <v-col cols="12" md="6">
            <v-img
              :src="selectedBook.imagen"
              height="500"
              :alt="selectedBook.titulo"
              class="popup-image"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-card-title class="popup-title">{{ selectedBook.titulo }}</v-card-title>
            <v-card-text class="popup-info">
              <div><span class="popup-info-label">Autor:</span> {{ selectedBook.autor }}</div>
              <div><span class="popup-info-label">Categorías:</span> {{ selectedBook.categorias }}</div>
              <div><span class="popup-info-label">Páginas:</span> {{ selectedBook.paginas }}</div>
              <div><span class="popup-info-label">Precio:</span> {{ selectedBook.precio }}</div>
              <div><span class="popup-info-label">Id:</span> {{ selectedBook.id }}</div>
              <div><span class="popup-info-label">Fecha Publicacion:</span> {{ selectedBook.fechaPublicacion }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" @click="comprarLibro(selectedBook)">Comprar</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Cards",
  components: {},

  data() {
    return {
      searchQuery: "",
      dialog: false,
      librosCards: [],
      showPopup: false,
      selectedBook: null,
    };
  },

  methods: {
    ...mapActions(["fetchLibros"]),
    ...mapActions(["eliminarLibro"]),
    ...mapActions(["OrdenarPrecioMayorMenor"]),
    ...mapActions(["OrdenarPrecioMenorMayor"]),
    ...mapActions(["OrdenarPrecioPorDefecto"]),
    ...mapActions(["addToCarrito"]),
    ...mapActions(["fetchLibroByName"]),
    ...mapActions(["filterLibros"]),

    verDetalle(item) {
      this.selectedBook = item;
      this.showPopup = true;
    },

    async buscarLibro() {
      this.librosCards = await this.filterLibros(this.searchQuery);
    },

    // Borrar Libro
    deleteLibro(id) {
      this.$store
        .dispatch("eliminarLibro", id)
        .then(() => {
          console.log("Libro eliminado con éxito");
        })
        .catch((error) => {
          console.error("Error al eliminar el libro:", error);
        });
    },
  },

  computed: {
    user() {
      return this.libro;
    },
    ...mapState(["libro"]),
  },

  created() {
    this.dispatch("fetchLibros");
  },

  mounted() {
    this.buscarLibro();
  },

  watch: {
    libro() {
      this.buscarLibro();
    },
  },
};
</script>

<style scoped>
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
}

.botonOrden {
  margin-bottom: 30px;
}

.v-btn__content {
}

.v-card__actions {
  display: flex;
}

.theme--light.v-btn {
  color: white;
}

.search-bar {
  width: 300px;
  margin-top: 20px;
  border-radius: 5px;
  padding: 5px;
}

.search-bar input {
  background-color: transparent;
  border: none;
  font-size: 14px;
  padding: 5px;
}

.search-bar .v-input__icon {
  color: grey;
}
</style>
