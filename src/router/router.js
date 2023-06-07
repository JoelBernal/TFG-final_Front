import Vue from "vue";
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Products from '../views/Products'
import ProductosAdmin from '../views/ProductsAdmin'
import Usuarios from '../views/Usuarios'
import InfoUsuario from '../views/InfoUsuario'
import Carrito from '../views/Carrito'
import FormLibro from '../views/FormLibro'
import FormTienda from '../views/FormTienda'
import Tiendas from '../views/Tiendas'
import TiendasAdmin from '../views/TiendasAdmin'
import Pdp from '../views/Pdp'
import AboutUs from '../views/AboutUs'
import PGracias from '../views/PGracias'

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
    path: "/productosAdmin",
    name: "productsAdmin",
    component: ProductosAdmin
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
  {
    path: "/formLibro",
    name: "FormLibro",
    component: FormLibro
  },
  {
    path: "/formTienda",
    name: "FormTienda",
    component: FormTienda
  },
  {
    path: "/tiendas",
    name: "Tiendas",
    component: Tiendas
  },
  {
    path: "/tiendasAdmin",
    name: "TiendasAdmin",
    component: TiendasAdmin
  },
  {
    path: "/libro/:id",
    name: "PDP",
    component: Pdp
  },
  {
    path: "/AboutUs",
    name: "Sobre Nosotros",
    component: AboutUs
  },
  {
    path: "/Gracias",
    name: "Gracias",
    component: PGracias
  },
];

const router = new VueRouter({
  routes
});

export default router;