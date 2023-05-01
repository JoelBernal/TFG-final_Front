<template>
  <v-app class="menuDiv">
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">NOMBRE PAGINA</v-list-item-title>
          <v-list-item-subtitle>Navigation drawers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="mandangon">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div style="display: flex; justify-content: center; margin-bottom: 20px;"></div>

      <LibrosForm></LibrosForm>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import LibrosForm from "./librosForm.vue";
import store from "@/store/store.js";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Libros", icon: "mdi-book", href: "" },
      { title: "Librerias", icon: "mdi-view-dashboard", href: "" },
      { title: "Ajustes", icon: "mdi-cog", href: "https://github.com/JoelBernal/ProyectoVueSegundaEval"},
    ],
  }),
  components: { LibrosForm },

  methods: {
    ...mapActions([store.dispatch("fetchOrdenarLibros")]),
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
#orden {
  background-color: #80461b;
  color: #fff;
  border: none;
  padding: 15px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
}

#orden:hover {
  background-color: #5e3414;
}

#orden:active {
  transform: scale(0.9);
}
</style>
