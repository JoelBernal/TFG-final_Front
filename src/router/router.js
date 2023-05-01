import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Products from '../views/Products'
import Usuarios from '../views/Usuarios'

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
    path: "/products",
    name: "products",
    component: Products
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: Usuarios
  },
];

const router = new VueRouter({
  routes
});

export default router;