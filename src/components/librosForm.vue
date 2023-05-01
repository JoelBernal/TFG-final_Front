<template>
  <v-app>
    <v-layout>
      <v-flex xs10 offset-xs1>
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header class="headline">Añadir Libros</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                  v-model="name"
                  :rules="[tituloRule]"
                  label="Titulo"
                  required
                  class="mt-required"
                ></v-text-field>
                <v-text-field v-model="autor" :rules="[autorRule]" label="Autor"></v-text-field>
                <v-text-field
                  v-model="fechaPublicacion"
                  :rules="[fechaRule]"
                  label="Fecha Publicacion"
                ></v-text-field>
                <v-text-field v-model="nPaginas" :rules="[paginasRule]" label="Nº Paginas"></v-text-field>
                <v-btn
                  :disabled="customerSubmitted && !valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >Añadir</v-btn>
              </v-form>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>

    <v-snackbar v-model="snackbar">
      Form submitted successfully
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>
  
  <script>
import { mask } from "vue-the-mask";

export default {
  directives: {
    mask,
  },
  data: () => ({
    mask: "",
    masked: "",
    show: false,
    customerSubmitted: false,
    valid: true,
    autor: "",
    fechaPublicacion: "",
    nPaginas: "",
    startDate: null,
    //   state: null,
    checkbox: false,
    lazy: true,
    snackbar: false,
  }),
  methods: {
    tituloRule(v) {
      if (!this.customerSubmitted) {
        return true;
      }
      if (!v) {
        return "Titulo es necesario";
      }
      return true;
    },
    autorRule(v) {
      if (!this.customerSubmitted) {
        return true;
      }
      if (!v) {
        return "Por favor, introduce un autor";
      }
      return true;
    },

    fechaRule(v) {
      if (!this.customerSubmitted) {
        return true;
      }
      if (!v) {
        return "Introduce una fecha";
      }
      return true;
    },

    paginasRule(v) {
      if (!this.customerSubmitted) {
        return true;
      }
      if (!v) {
        return "Introduce un numero de Paginas";
      }
      return true;
    },

    validate() {
      this.customerSubmitted = true;
      if (this.$refs.form.validate()) {
        // got valid form, submit it
        this.snackbar = true;
      }
    },
  },
  computed: {
    customer() {
      return {
        titulo: this.titulo,
        masked: this.masked,
        email: this.email,
        startDate: this.startDate,
        state: this.state,
        optIn: this.checkbox,
      };
    },
  },
};
</script>
  
  <style>
</style>
  