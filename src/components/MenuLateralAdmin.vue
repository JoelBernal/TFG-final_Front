<template>
  <v-app class="menuDiv">
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">NOMBRE PAGINA</v-list-item-title>
          <v-list-item-subtitle>Navigation drawers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>


      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.href"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="mandangon">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="redirectToFormLibro" link>
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="añadirLibro"
              >Añadir Libro (ADMIN)</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="redirectToFormTienda" link>
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="añadirTienda"
              >Añadir Tienda (ADMIN)</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div
        style="display: flex; justify-content: center; margin-bottom: 20px"
      ></div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import store from "@/store/store.js";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  data: () => ({
    items: [
      { title: "Libros", icon: "mdi-book", href: "/productosAdmin" },
      { title: "Tiendas", icon: "mdi-view-dashboard", href: "/tiendasAdmin" },
      { title: "Ajustes", icon: "mdi-cog", href: "/InfoUsuario" },
    ],
  }),
  components: {},

  methods: {
    ...mapActions([store.dispatch("fetchOrdenarLibros")]),
    redirectToFormLibro() {
      this.$router.push("/formLibro");
    },
    redirectToFormTienda() {
      this.$router.push("/formTienda");
    },
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
