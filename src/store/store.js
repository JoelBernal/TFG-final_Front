import Vue from 'vue';
import Vuex from 'vuex';
import Notifications from 'vue-notification';



Vue.use(Vuex);
Vue.use(Notifications);

export default new Vuex.Store({
  state: {
    libro: [],
    usuarios: [],
    libroOrdenar: []
  },
  mutations: {
    initLibro(state, libro) {
      state.libro = libro;
    },
    initOrdenarLibro(state, libro) {
      state.libroOrdenar = libro;
    },
    eliminarLibro(state, id) {
      state.libro = state.libro.filter((libro) => libro.id != id)
    },
    initUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    },
  },


  actions: {
    fetchLibros({ commit }) {

      fetch('https://apitfgfinal2023.azurewebsites.net/Libros')

        .then(response => { return response.json() })

        .then(response => {

          commit("initLibro", response)

        })

    },

    fetchUsuarios({ commit }) {

      fetch('https://apitfgfinal2023.azurewebsites.net/Clientes')

        .then(response => { return response.json() })

        .then(response => {

          commit("initUsuarios", response)

        })

    },

    //Ordenar precio de mayor a menor
    OrdenarPrecioMayorMenor({ commit }) {
      console.log("Se editan los datos")
      fetch('https://apitfgfinal2023.azurewebsites.net/Libros?orderBy=PrecioAscendente')

        .then(response => { return response.json() })

        .then(data => {

          commit("initLibro", data)

        })
        .catch(error => {
          console.error(error);
        })

    },

    //Ordenar precio de mayor a menor
    OrdenarPrecioMenorMayor({ commit }) {
      console.log("Se editan los datos")
      fetch('https://apitfgfinal2023.azurewebsites.net/Libros?orderBy=PrecioDescendente')

        .then(response => { return response.json() })

        .then(data => {

          commit("initLibro", data)

        })
        .catch(error => {
          console.error(error);
        })

    },

    //Ordenar precio por defecto
    OrdenarPrecioPorDefecto({ commit }) {
      console.log("Se editan los datos")
      fetch('https://apitfgfinal2023.azurewebsites.net/Libros')

        .then(response => { return response.json() })

        .then(data => {

          commit("initLibro", data)

        })
        .catch(error => {
          console.error(error);
        })

    },



    eliminarLibro({ commit }, id) {

      console.log("Este est mi id a eliminar" + id)
      return fetch(`https://apitfgfinal2023.azurewebsites.net/Libros/${id}`, {
        method: 'DELETE'
      })

        .then(() => {
          commit(`eliminarLibro`, id)
        })
        .catch((error) => {
          console.error(error);
        })

    },

    addToCarrito({ commit, state }, producto) {
      // Verificar si el libro ya está en el carrito
      const libroExistente = state.carrito.find((item) => item.id === producto.id);
    
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
    
        commit('setCarrito', nuevoCarrito);
      } else {
        // Si el libro no está en el carrito, añadirlo con cantidad 1
        const nuevoProducto = {
          ...producto,
          cantidad: 1,
        };
    
        const nuevoCarrito = [...state.carrito, nuevoProducto];
        commit('setCarrito', nuevoCarrito);
      }
    },
    

  }, modules: {}
});


