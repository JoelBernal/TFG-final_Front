<template>
  <v-app>
    <v-app-bar
      style="display: flex; width: 100%; left: 0px; z-index: 9999"
      color="green"
      class="flex-grow-0"
      app
      dark
    >
      <img
        class="logoImgNavBar"
        src="https://images.vexels.com/media/users/3/267831/isolated/preview/cd079d709300f6af3cdfa75b83d35db8-icono-de-libros-acogedores-de-invierno.png"
        alt=""
      />
      <v-app-bar-title class="tituloNavBar"
        >LIBRERIAS PACO</v-app-bar-title
      >
      <v-toolbar-items
        style="gap: 0px; width: 70%"
        class="hidden-xs-only menuBotones"
      >
        <v-btn
          style="background-color: #272727"
          text
          v-for="item in menuItems.filter((a) => a.active)"
          :key="item.title"
          :to="item.path"
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
      <i class="bi bi-list menuDesplegables" @click="sidebar = !sidebar"></i>
      <v-navigation-drawer v-model="sidebar" app right>
        <v-list>
          <v-list-item
            v-for="item in menuItems.filter((a) => a.active)"
            :key="item.title"
            :to="item.path"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/home", icon: "home", active: true },
        {
          title: "Productos",
          path: "/products",
          icon: "products",
          active: true,
        },
        {
          title: "Productos-Admin",
          path: "/productosAdmin",
          icon: "productosAdmin",
          active: false,
        },
        {
          title: "Usuarios",
          path: "/usuarios",
          icon: "usuarios",
          active: false,
        },

        { title: "Tiendas", path: "/tiendas", icon: "Tiendas", active: true },
        {
          title: "Sobre Nosotros",
          path: "/aboutus",
          icon: "aboutUs",
          active: true,
        },
        {
          title: "Tiendas-Admin",
          path: "/tiendasAdmin",
          icon: "TiendasAdmin",
          active: false,
        },
        { title: "Usuario", path: "/InfoUsuario", icon: "user", active: false },
        {
          title: "Iniciar Sesion",
          path: "/login",
          icon: "face",
          active: false,
        },
        {
          title: "Registrarse",
          path: "/register",
          icon: "register",
          active: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(["usuario"]),
  },
  watch: {
    usuario(newUser) {
      this.chechUser(newUser);
    },
  },
  methods: {
    chechUser(user) {
      console.log(user);
      if (user) {
        this.menuItems.forEach((i) => {
          if (i.title == "Iniciar Sesion" || i.title == "Registrarse") {
            i.active = false;
          }
          if (i.title == "Usuario") {
            i.active = true;
          }
          if (i.title == "Usuarios" && user.rol == "admin") {
            i.active = true;
          } else if (i.title == "Usuarios" && user.rol !== "admin") {
            i.active = false;
          }
          if (i.title == "ProductosAdmin" && user.rol == "admin") {
            i.active = true;
          } else if (i.title == "ProductosAdmin" && user.rol !== "admin") {
            i.active = false;
          }

          //Productos
          if (i.title == "Productos-Admin" && user.rol == "admin") {
            i.active = true;
          } else if (i.title == "Productos-Admin" && user.rol !== "admin") {
            i.active = false;
          }
          if (i.title == "Productos" && user.rol == "admin") {
            i.active = false;
          } else if (i.title == "Productos" && user.rol !== "admin") {
            i.active = true;
          }

          //Tiendas
          if (i.title == "Tiendas-Admin" && user.rol == "admin") {
            i.active = true;
          } else if (i.title == "Tiendas-Admin" && user.rol !== "admin") {
            i.active = false;
          }
          if (i.title == "Tiendas" && user.rol == "admin") {
            i.active = false;
          } else if (i.title == "Tiendas" && user.rol !== "admin") {
            i.active = true;
          }
        });
      } else {
        this.menuItems.forEach((i) => {
          if (i.title == "Iniciar Sesion" || i.title == "Registrarse") {
            i.active = true;
          }
          if (i.title == "Usuario") {
            i.active = false;
          }
        });
      }
    },
  },
  mounted() {
    this.chechUser(this.usuario);
  },
};
</script>

<style>
.v-application--wrap {
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 6vh;
  max-width: 100%;
  position: relative;
  background-color: antiquewhite;
}

.v-toolbar__content {
  display: flex;
  width: 100%;
}

.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px 0px;
}

.v-toolbar__items {
  gap: 0px;
  width: 70%;
  display: flex;
  justify-content: flex-end;
}

.logoImgNavBar {
  width: 65px;
  margin-left: 10px;
}

.tituloNavBar {
  width: 100%;
  font-size: 37px;
  font-family: serif;
  margin-left: 10px;
}

.menuDesplegables {
  display: none;
  cursor: pointer;
}

@media (max-width: 1300px) {
  .menuBotones {
    display: none;
  }
  .menuDesplegables {
    display: block;
    margin-right: 30px;
  }
}
@media (max-width: 400px) {
  .tituloNavBar{
    font-size: 20px;
  }
  .logoImgNavBar {
    width: 40px;
  }
}
</style>
