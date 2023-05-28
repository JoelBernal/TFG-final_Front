import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Products from '../views/Products'
import Usuarios from '../views/Usuarios'
import InfoUsuario from '../views/InfoUsuario'
import Carrito from '../views/Carrito'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/products",
    name: "products",
    component: Products
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: Usuarios
  },
  {
    path: "/infousuario",
    name: "infousuario",
    component: InfoUsuario
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: Carrito
  },
];

const router = new VueRouter({
  routes
});

export default router;