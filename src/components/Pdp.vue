<template>
  <div>
    <v-card class="medium-card">
      <v-img :src="libros.imagen" alt="Libro Image"></v-img>
      <v-card-title class="medium-card-title">{{ libros.name }}</v-card-title>
      <v-card-text class="medium-card-text">
        <div>Titulo: {{ libros.titulo }}</div>
        <div>Precio: {{ libros.precio }}</div>
        <div>Autor: {{ libros.autor }}</div>
        <div>Paginas: {{ libros.origin.paginas }}</div>
        <div>Fecha de Publicación: {{ libros.fechaPublicacion }}</div>
        <div>Categoria: {{ libros.categoriaId.nombre }}</div>
        

        <!-- Agrega más atributos del personaje según tus necesidades -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      libros: {},
    };
  },
  mounted() {
    this.buscarLibro();
  },
  computed: {
    ...mapState(["libros"]),
  },
  methods: {
    buscarLibro() {
      // Obtén el ID del libro de la ruta
      const libroId = this.$route.params.id;
      // Llama a una acción en el store para obtener los detalles del personaje por su ID
      this.libros = this.libros.find(
        (libros) => libros.id == libroId
      );
      console.log(this.libro)
    },

    getCategoryName(categoriaId) {
      // Aquí realizarías la petición para obtener la categoría por su ID
      this.$http.get('https://apitfgfinal2023.azurewebsites.net/Categorias/' + categoriaId)
        .then(response => {
          // Asumiendo que la respuesta contiene un objeto con un campo 'Nombre'
          return response.data.nombre;
        })
        .catch(error => {
          console.log(error);
          return 'Error obteniendo nombre de categoría';
        });
    }

  },
  watch: {
    libros() {
      this.buscarLibro();
    },
  },
};
</script>

<style scoped>
.medium-card {
  max-width: 400px;
  margin: auto;
}

.medium-card-title {
  font-size: 20px;
  line-height: 1.2;
}

.medium-card-text {
  font-size: 14px;
  line-height: 1.2;
}
</style>
