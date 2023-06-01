<template>
  <div class="cart">
    <v-card>
      <v-card-title>
        <h2>Carrito de Compra</h2>
      </v-card-title>
      <v-card-text>
        <table class="cart-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td><img :src="item.image" :alt="item.title" /></td>
              <td>{{ item.title }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>
                <button @click="removeItem(item.id)" class="cart-item-remove-btn">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="cart-total">
          <p>Total: {{ getTotalPrice() }}</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="checkout" color="primary">Pagar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    };
  },
  methods: {
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    },
    getTotalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    checkout() {
      console.log('Realizando pago...');
    }
  }
};
</script>

<style scoped>
.cart {
  margin: 20px;
}

.cart h2 {
  margin-top: 0;
  font-size: 24px;
  text-align: center;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th,
.cart-table td {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}

.cart-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.cart-table img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.cart-total {
  text-align: right;
  margin-top: 20px;
}

.cart-total p {
  font-size: 16px;
}

.cart-item-remove-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
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
