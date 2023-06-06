import Vue from "vue";
import Vuex from "vuex";

import Notifications from "vue-notification";

Vue.use(Vuex);
Vue.use(Notifications);


export default new Vuex.Store({
  state: {
    libro: [],
    establecerfiltrado: [],
    usuarios: [],
    tienda: [],
    libroOrdenar: [],
    usuario: null,
    categorias: [],
  },
  mutations: {
    initLibro(state, libro) {
      state.libro = libro;
    },
    initTiendas(state, tienda) {
      state.tienda = tienda;
    },
    initUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    },
    initCategorias(state, categorias) {
      state.categorias = categorias;
    },
    initOrdenarLibro(state, libro) {
      state.libroOrdenar = libro;
    },
    eliminarLibro(state, id) {
      state.libro = state.libro.filter((libro) => libro.id != id);
    },
    eliminarTienda(state, id) {
      state.tienda = state.tienda.filter((tienda) => tienda.id != id);
    },
    eliminarCliente(state, id) {
      state.usuarios = state.usuarios.filter((usuarios) => usuarios.id != id);
    },
    Login(state, usuario) {
      state.usuario = usuario;
    },
    agregarLibro(state, libro) {
      state.libro.push(libro);
    },
    establecerfiltrado(state, libro) {
      state.filtrado = libro;
    },
    RegistrarUser(state, usuarios) {
      state.usuarios.push(usuarios);
    },
    BuscadorLibro(state, titulo) {
      state.libro = state.libro.filter((libro) => libro.titulo != titulo);
    },
    BuscadorTienda(state, comunidad) {
      state.tienda = state.tienda.filter((tienda) => tienda.comunidad != comunidad);
    },        
  },

  actions: {
    async fetchLibros({ commit }) {
      let res = await fetch("https://apitfgfinal2023.azurewebsites.net/Libros")
      let data = await res.json();
      commit("initLibro", data);
    },

    //Fetch categorias
    async fetchCategorias({ commit }) {
      try {
        const response = await fetch("https://apitfgfinal2023.azurewebsites.net/Categorias");
        if (!response.ok) {
          throw new Error("Error al obtener las categorías");
        }
        const data = await response.json();
        commit("initCategorias", data);
      } catch (error) {
        console.error(error);
      }
    },

    async fetchTiendas({ commit }) {
      let res = await fetch("https://apitfgfinal2023.azurewebsites.net/Tiendas")
      let data = await res.json();
      commit("initTiendas", data);
    },

    async fetchUsuarios({ commit }) {
      let res = await fetch("https://apitfgfinal2023.azurewebsites.net/Clientes")
      let data = await res.json();
      commit("initUsuarios", data);
    },

    async fetchUsuario(store, id) {
      console.log(id)
      let a = await fetch("https://apitfgfinal2023.azurewebsites.net/Clientes/" + id);
      return await a.json();
    },

    //Buscar libro por ID
    async fetchLibro(store, id) {
      console.log(id)
      let a = await fetch("https://apitfgfinal2023.azurewebsites.net/Libros/" + id);
      return await a.json();
    },



    //Ordenar precio de mayor a menor
    OrdenarPrecioMayorMenor({ commit }) {
      console.log("Se editan los datos");
      fetch(
        "https://apitfgfinal2023.azurewebsites.net/Libros?orderBy=PrecioAscendente"
      )
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          commit("initLibro", data);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    //Ordenar precio de mayor a menor
    OrdenarPrecioMenorMayor({ commit }) {
      console.log("Se editan los datos");
      fetch(
        "https://apitfgfinal2023.azurewebsites.net/Libros?orderBy=PrecioDescendente"
      )
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          commit("initLibro", data);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    //Ordenar precio por defecto
    OrdenarPrecioPorDefecto({ commit }) {
      console.log("Se editan los datos");
      fetch("https://apitfgfinal2023.azurewebsites.net/Libros")
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          commit("initLibro", data);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    eliminarLibro({ commit }, id) {
      console.log("Este est mi id a eliminar" + id);
      return fetch(`https://apitfgfinal2023.azurewebsites.net/Libros/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          commit(`eliminarLibro`, id);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    eliminarTienda({ commit }, id) {
      console.log("Este est mi id a eliminar" + id);
      return fetch(`https://apitfgfinal2023.azurewebsites.net/Tiendas/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          commit(`eliminarTienda`, id);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    eliminarCliente({ commit }, id) {
      console.log("Este est mi id a eliminar" + id);
      return fetch(`https://apitfgfinal2023.azurewebsites.net/Clientes/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          commit(`eliminarCliente`, id);
        })
        .catch((error) => {
          console.error(error);
        });
    },


    //Añadir Libro
    async agregarLibro({ commit }, libro) {
      return await fetch('https://apitfgfinal2023.azurewebsites.net/Libros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(libro)
      })
        .then(async response => await response.json())
        .then(data => {
          commit('agregarLibro', data);
        })
        .catch(error => {
          console.error(error);
        });
    },

    //Añadir Tienda
    async agregarTienda({ commit }, libro) {
      return await fetch('https://apitfgfinal2023.azurewebsites.net/Tiendas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(libro)
      })
      .then(async response => await response.json())
      .then(data => {
        commit('agregarLibro', data);
      })
      .catch(error => {
        console.error(error);
      });
    },

    //Añadir Tienda
    async agregarTienda({ commit }, libro) {
      return await fetch('https://apitfgfinal2023.azurewebsites.net/Tiendas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(libro)
      })
        .then(async response => await response.json())
        .then(data => {
          commit('agregarTienda', data);
        })
        .catch(error => {
          console.error(error);
        });
    },

    addToCarrito({ commit, state }, producto) {
      // Verificar si el libro ya está en el carrito
      const libroExistente = state.carrito.find(
        (item) => item.id === producto.id
      );

      if (libroExistente) {
        // Si el libro ya está en el carrito, aumentar la cantidad en 1
        const nuevoCarrito = state.carrito.map((item) => {
          if (item.id === producto.id) {
            return {
              ...item,
              cantidad: item.cantidad + 1,
            };
          }
          return item;
        });

        commit("setCarrito", nuevoCarrito);
      } else {
        // Si el libro no está en el carrito, añadirlo con cantidad 1
        const nuevoProducto = {
          ...producto,
          cantidad: 1,
        };

        const nuevoCarrito = [...state.carrito, nuevoProducto];
        commit("setCarrito", nuevoCarrito);
      }
    },

    //dispatch es para ejecutar una funcion dentro de otra funcion dentro del store
    async fetchLogin({ dispatch }, usuario) {
      let res = await fetch("https://apitfgfinal2023.azurewebsites.net/Clientes/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: usuario.correo,
          contrasenya: usuario.contrasenya,
        }),
      });

      let data = await res.json();
      await dispatch("login", data)
    },

    async login({ commit, dispatch }, idUsuario) {
      let user = await dispatch("fetchUsuario", idUsuario);
      console.log(user);
      commit("Login", user);

      Vue.$cookies.set("idUsuario", idUsuario)
    },


    async registerUser({ commit }, user) {
      console.log(user)
      try {
        const response = await fetch('https://apitfgfinal2023.azurewebsites.net/Clientes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        console.log(response);
        if (response.ok) {
          const data = await response.json();
          commit('ADD_USER', data);
        } else {
          // Manejar los errores de respuesta HTTP
          console.error(`Error HTTP: ${response.status}`);
        }

      } catch (error) {
        console.error(error);
      }
    },


    async fetchLibroByName({ commit }, titulo) {
      try {
        const response = await fetch(`https://apitfgfinal2023.azurewebsites.net/Libros/titulo/${titulo}`);
        const libro = await response.json();
        commit("initLibro", libro);
      } catch (error) {
        console.error(error);
      }
    },

    filterLibros(store, query) {
      return this.state.libro.filter(l => l.titulo.toLowerCase().includes(query.toLowerCase()) || l.autor.toLowerCase().includes(query.toLowerCase()));
    },
    filterTiendas(store, comunidad) {
      return this.state.tienda.filter(l => l.comunidad.toLowerCase().includes(comunidad.toLowerCase()));
    },

    async updateUser({ commit }, { usuario, updatedUserInfo,user }) {
      console.log(usuario); // Añadir esta línea
      console.log(usuario.idUsuario);
      // console.log(userInfo); // Y esta otra línea
      // userInfo.idUsuario = usuario.id;
      console.log(updatedUserInfo);
      const response = await fetch(`https://apitfgfinal2023.azurewebsites.net/Clientes/${usuario.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserInfo),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let responseData = null;
      try {
        responseData = await response.json();
      } catch (e) {
        console.error('La respuesta no es un JSON válido:', e);
      }

      location.reload();
      // Llamamos a la mutación 'SET_USER' para actualizar el estado
      commit('SET_USER', responseData);
      commit('SET_NAVIGATION', user);
    },
  },
  modules: {},
});