<template>
  <div class="container">
    <div class="tiendas-form">
      <h2 class="form-title">Añadir Tienda</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="titulo" class="form-label">Comunidad:</label>
          <input type="text" id="comunidad" v-model="comunidad" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="titulo" class="form-label">Localidad:</label>
          <input type="text" id="localidad" v-model="localidad" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="autor" class="form-label">Calle:</label>
          <input type="text" id="calle" v-model="calle" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="autor" class="form-label">Codigo Postal:</label>
          <input type="text" id="codigoPostal" v-model="codigoPostal" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="genero" class="form-label">Trabajadores:</label>
          <input type="text" id="trabajadores" v-model="trabajadores" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="genero" class="form-label">Horario de atención:</label>
          <input type="text" id="horarioAtencion" v-model="horarioAtencion" class="form-input" required>
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
      comunidad: '',
      localidad: '',
      calle: '',
      codigoPostal: '',
      trabajadores: '',
      horarioAtencion: '',
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones
      // Por ejemplo, puedes llamar a una acción de Vuex para agregar la tienda al estado global
      this.$store.dispatch('agregarTienda', {
        comunidad: this.comunidad,
        localidad: this.localidad,
        calle: this.calle,
        codigoPostal: this.codigoPostal,
        trabajadores: this.trabajadores,
        horarioAtencion: this.horarioAtencion
      });
      
      // Una vez que la tienda se ha agregado correctamente, puedes restablecer los campos del formulario
      this.comunidad = '';
      this.localidad = '';
      this.calle = '';
      this.codigoPostal = '';
      this.trabajadores = '';
      this.horarioAtencion = '';
      
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

.tiendas-form {
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
