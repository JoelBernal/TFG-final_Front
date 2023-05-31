<template>
  <div class="container">
    <div class="libros-form">
      <h2 class="form-title">Añadir Libro</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="titulo" class="form-label">Título:</label>
          <input type="text" id="titulo" v-model="titulo" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="titulo" class="form-label">Precio:</label>
          <input type="text" id="precio" v-model="precio" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="autor" class="form-label">Autor:</label>
          <input type="text" id="autor" v-model="autor" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="autor" class="form-label">Paginas:</label>
          <input type="text" id="autor" v-model="paginas" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="genero" class="form-label">CategoríaId:</label>
          <input type="text" id="categoria" v-model="categoriaId" class="form-input" required>
        </div>
        <button type="submit" class="submit-button">Añadir</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: '',
      precio: '',
      autor: '',
      paginas: '',
      categoriaId: ''
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones
      // Por ejemplo, puedes llamar a una acción de Vuex para agregar el libro al estado global
      this.$store.dispatch('agregarLibro', {
        titulo: this.titulo,
        precio: this.precio,
        autor: this.autor,
        paginas: this.paginas,
        enVenta: true,
        categoriaId: this.categoriaId
      });
      
      // Una vez que el libro se ha agregado correctamente, puedes restablecer los campos del formulario
      this.titulo = '';
      this.precio = '';
      this.autor = '';
      this.paginas = '';
      this.categoriaId = '';
      
      // También puedes ocultar el formulario si deseas
      this.$emit('cerrar-formulario');
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta la altura según tus necesidades */
}

.libros-form {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  width: 300px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #80461b;
  color: #fff;
  border: none;
  padding: 15px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
}

.submit-button:hover {
  background-color: #5e3414;
}

.submit-button:active {
  transform: scale(0.9);
}
</style>
