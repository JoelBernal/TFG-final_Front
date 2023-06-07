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
        @input="buscarLibro"
      ></v-text-field>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn id="orden" v-on="on">Ordenar por precio</v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="
              OrdenarPrecioPorDefecto();
              dialog = true;
            "
          >
            <v-list-item-title>Por defecto</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              OrdenarPrecioMenorMayor();
              dialog = true;
            "
          >
            <v-list-item-title>Mayor a menor</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="
              OrdenarPrecioMayorMenor();
              dialog = true;
            "
          >
            <v-list-item-title>Menor a mayor</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn id="orden" v-on="on">Categoría</v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="categoria in categorias"
            :key="categoria.id"
            @click="filtrarPorCategoria(categoria.id)"
          >
            <v-list-item-title>{{ categoria.nombre }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div>
      <v-row no-gutters>
        <v-col
          style="padding-left: 20px"
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
            <v-card-title style="cursor: pointer">
              {{ item.titulo }}
            </v-card-title>
            <v-card-subtitle class="pt-4">
              Fecha de publicacion: {{ item.fechaPublicacion }}
            </v-card-subtitle>

            <v-card-text>
              <div>Autor: {{ item.autor }}</div>
              <div>Categorias: {{ namesCategoria[item.categoriaId] }}</div>
              <div>Paginas: {{ item.paginas }}</div>
              <div>Precio: {{ item.precio }}</div>
              <div>ISBN: {{ item.isbn }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" @click="verDetalle(item)">Ver detalles</v-btn>
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
            <v-img :src="selectedBook.imagen" height="500" :alt="selectedBook.titulo" class="popup-image"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-card-title class="popup-title">{{
              selectedBook.titulo
            }}</v-card-title>
            <v-card-text class="popup-info">
              <div>
                <span class="popup-info-label">Autor:</span>
                {{ selectedBook.autor }}
              </div>
              <div>
                <span class="popup-info-label">Categorías:</span>
                {{ namesCategoria[selectedBook.categoriaId] }}
              </div>
              <div>
                <span class="popup-info-label">Páginas:</span>
                {{ selectedBook.paginas }}
              </div>
              <div>
                <span class="popup-info-label">Precio:</span>
                {{ selectedBook.precio }}
              </div>
              <div>
                <span class="popup-info-label">Id:</span> {{ selectedBook.id }}
              </div>
              <div>
                <span class="popup-info-label">Fecha Publicacion:</span>
                {{ selectedBook.fechaPublicacion }}
              </div>
            </v-card-text>

            <div class="privacy-policy" style="font-size: 10px; text-align: center; padding: 40px;">Política de
              Privacidad: En nuestra plataforma, nos comprometemos a proteger tu privacidad y tus datos personales. Al
              hacer clic en el botón "Añadir a la Cesta" a continuación, estás aceptando nuestras políticas de privacidad.
              Toda la información que nos proporciones será tratada de forma confidencial y utilizada únicamente para
              mejorar tu experiencia en nuestro sitio. Para obtener más detalles sobre cómo manejamos tus datos, te
              invitamos a leer nuestra política de privacidad.</div>
            <v-card-actions>
              <v-btn color="orange" @click.stop="comprarLibro(selectedBook)">Comprar</v-btn>
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
      categoriasLoaded: false,
      namesCategoria: {
        1: "Terror",
        2: "Humor",
        3: "Ficcion",
        4: "Literatura",
        5: "Fantasia",
        6: "Poesia",
        7: "Misterio y suspense",
        8: "Autoayuda",
      },
    };
  },

  methods: {
    ...mapActions(["fetchLibros"]),
    ...mapActions(["eliminarLibro"]),
    ...mapActions(["OrdenarPrecioMayorMenor"]),
    ...mapActions(["OrdenarPrecioMenorMayor"]),
    ...mapActions(["OrdenarPrecioPorDefecto"]),
    ...mapActions(["addToCart"]),
    ...mapActions(["fetchLibroByName"]),
    ...mapActions(["filterLibros"]),
    ...mapActions(["fetchCategorias"]),

    verDetalle(item) {
      this.selectedBook = item;
      this.showPopup = true;
      this.getCategoryName(this.selectedBook.categoriaId)
        .then(Nombre => {
          this.categoryName = Nombre;
        })
        .catch(err => {
          console.log(err);

          this.categoryName = 'Error obteniendo nombre de categoría';
        });
    },

    async buscarLibro() {
      this.librosCards = await this.filterLibros(this.searchQuery);
    },

    async getCategoryName(categoriaId) {
      console.log(categoriaId);
      const response = await this.$http.get('https://apitfgfinal2023.azurewebsites.net/Categorias/' + categoriaId);
      console.log(response.data);
      console.log(response.data.nombre);
      return response.data.nombre;
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
    filtrarPorCategoria(categoriaId) {
      this.librosCards = this.librosCards.filter((libro) =>
        libro.categorias.includes(categoriaId)
      );
    },

    comprarLibro(selectedBook) {
    this.$store.dispatch('addToCart', selectedBook);
    
  },

  },

  computed: {
    user() {
      return this.libro;
    },
    ...mapState(["libro"]),
    ...mapState(["categorias"]),
  },

  created() {
    this.dispatch("fetchLibros");
    this.fetchCategorias();
  },

  mounted() {
    this.buscarLibro();
    this.fetchCategorias();
  },

  watch: {
    libro() {
      this.buscarLibro();
    },
    categorias() {
      this.categoriasLoaded = true;
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

.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default.orange {
  background-color: #80461b !important;
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

.v-btn__content {}

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
