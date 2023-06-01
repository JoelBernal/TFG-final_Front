<template>
  <v-container fluid>
    <div style="display: flex; align-items: center">
      <v-text-field
        v-model="searchQuery"
        label="Buscar libros"
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

      <v-btn id="addLibro" @click="agregarLibro()" color="primary" dark
        >Añadir libro</v-btn
      >
    </div>

    <div>
      <v-row no-gutters>
        <v-col v-for="item in librosCards" :key="item.id" cols="12" sm="4">
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
  </v-container>
</template>

<script>
import store from "@/store/store.js";
import { mapState, mapActions } from "vuex";

export default {
  name: "Cards",
  components: {},

  data() {
    return {
      searchQuery: "",
      dialog: false,
      librosCards: [],
    };
  },

  methods: {
    ...mapActions([store.dispatch("fetchLibros")]),
    ...mapActions(["eliminarLibro"]),
    ...mapActions(["OrdenarPrecioMayorMenor"]),
    ...mapActions(["OrdenarPrecioMenorMayor"]),
    ...mapActions(["OrdenarPrecioPorDefecto"]),
    ...mapActions(["addToCarrito"]),
    ...mapActions(["fetchLibroByName"]),
    ...mapActions(["filterLibros"]),

    async buscarLibro() {
      this.librosCards = await this.filterLibros(this.searchQuery);
    },

    //Borrar Libro
    deleteLibro(id) {
      this.$store
        .dispatch("eliminarLibro", id)
        .then(() => {
          // Aquí puedes realizar alguna acción adicional después de eliminar el libro, si es necesario
          console.log("Libro eliminado con éxito");
        })
        .catch((error) => {
          // Manejo de errores en caso de que ocurra algún problema al eliminar el libro
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

.search-bar {
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
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
