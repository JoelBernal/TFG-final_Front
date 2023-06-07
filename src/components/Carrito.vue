<template>
  <div>
    <div class="cart">
      <h2>Mi Carrito</h2>
      <table class="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Título</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in cart" :key="book.id">
            <td>{{ index + 1 }}</td>
            <td>
              <img :src="book.imagen" alt="Book image" class="book-image" />
            </td>
            <td>{{ book.titulo }}</td>
            <td>{{ book.precio }}€</td>
            <td>
              <button class="remove-btn" @click="removeFromCart(book)">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="payment-form">
        <h3 style="text-align: center;margin-bottom: 20px;margin-top: 20px;">Información de Pago</h3>
        <form @submit.prevent="checkout">
          <div class="form-group">
            <label for="cardName">Nombre en la tarjeta</label>
            <input id="cardName" v-model="cardName" type="text" required>
          </div>
          <div class="form-group">
            <label for="cardNumber">Número de tarjeta</label>
            <input id="cardNumber" v-model="cardNumber" type="text" required>
          </div>
          <div class="form-group">
            <label for="expiryDate">Fecha de vencimiento</label>
            <input id="expiryDate" v-model="expiryDate" type="text" required>
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input id="cvv" v-model="cvv" type="text" required>
          </div>
          <button type="submit" style="width: 100%;" class="pay-button">Pagar</button>
        </form>

        <div v-if="errorMessage" class="error-message">
    {{ errorMessage }}
  </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';
import Cookies from 'js-cookie';

export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapMutations(['removeFromCart', 'clearCart', 'LibrosClientesPost']),

    async checkout() {
  try {
    // Recuperando el id del cliente de las cookies
    const idCliente = Cookies.get('idUsuario');
    
    // Preparando la lista de libros
    const libros = this.cart.map((book) => ({
      idCliente: idCliente,
      idlibro: book.id,
      nombreLibro: book.titulo,
    }));
    console.log(libros);
    // Enviando los libros a la API
    await this.LibrosClientesPost(libros);

    // Limpieza del carrito de compras
    this.clearCart();

    // Redireccionando al usuario a la página de agradecimiento
    this.$router.push('/Gracias');

    // Limpiar el mensaje de error en caso de éxito
    this.errorMessage = '';
  } catch (error) {
    // En caso de error, imprimirlo en la consola y establecer el mensaje de error
    console.error('Error al realizar el pago:', error);
    this.errorMessage = 'Hubo un error al realizar el pago. Por favor, intenta de nuevo.';
  }
},

  },
};
</script>



<style scoped>
.cart {
  padding: 2rem;
  font-family: 'Roboto', sans-serif;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th,
.cart-table td {
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
}

.cart-table th {
  background-color: #80461b;
  color: white;
}

.book-image {
  width: 50px;
  height: 50px;
}

.remove-btn {
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
}

.payment-form {
  width: 400px;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.pay-button {
  background-color: #80461b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pay-button:hover {
  background-color: #80461b;
}
</style>









<!-- 
<template>
  <div class="cart">
    <h2>Carrito de Compra</h2>
    <div v-if="cartItems.length === 0">
      <p>No hay productos en el carrito</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <div class="cart-item">
            <img :src="item.image" :alt="item.title" class="cart-item-image" />
            <div class="cart-item-details">
              <h4>{{ item.title }}</h4>
              <p>Precio: {{ item.price }}</p>
              <p>Cantidad: {{ item.quantity }}</p>
            </div>
            <button @click="removeItem(item.id)" class="cart-item-remove-btn">Eliminar</button>
          </div>
        </li>
      </ul>
      <div class="cart-total">
        <p>Total: {{ getTotalPrice() }}</p>
      </div>
      <button @click="checkout" class="checkout-btn">Pagar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        // Aquí puedes inicializar el carrito con los productos agregados
        // Ejemplo:
        // {
        //   id: 1,
        //   title: 'Producto 1',
        //   price: 10,
        //   quantity: 2,
        //   image: 'ruta-imagen-1.jpg'
        // },
        // {
        //   id: 2,
        //   title: 'Producto 2',
        //   price: 15,
        //   quantity: 1,
        //   image: 'ruta-imagen-2.jpg'
        // },
        // ...
      ]
    };
  },
  methods: {
    removeItem(itemId) {
      // Eliminar el elemento del carrito según su ID
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    },
    getTotalPrice() {
      // Calcular el total del carrito sumando el precio de todos los productos
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    checkout() {
      // Lógica para realizar el proceso de pago
      // Puedes implementar aquí la integración con un servicio de pago, enviar una solicitud al servidor, etc.
      // Ejemplo:
      // Realizar una petición POST al servidor con los detalles del pedido
      // fetch('/api/checkout', {
      //   method: 'POST',
      //   body: JSON.stringify(this.cartItems),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      //   .then(response => {
      //     // Manejar la respuesta del servidor
      //     // Ejemplo:
      //     if (response.ok) {
      //       // Pago exitoso, mostrar mensaje de confirmación, limpiar el carrito, etc.
      //       console.log('Pago exitoso');
      //       this.cartItems = [];
      //     } else {
      //       // Pago fallido, mostrar mensaje de error, etc.
      //       console.log('Error en el pago');
      //     }
      //   })
      //   .catch(error => {
      //     // Manejar el error de la solicitud
      //     console.error('Error en la solicitud de pago:', error);
      //   });
      console.log('Realizando pago...');
    }
  }
};
</script>

<style scoped>
.cart {
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.cart h2 {
  margin-top: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-remove-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.cart-total {
  text-align: right;
  margin-top: 20px;
}

.checkout-btn {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style> -->
