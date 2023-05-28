<template>
  <div class="center-container">
    <v-container fluid>
      <v-card class="elevation-4">
        <v-card-title class="primary">
          <h2 class="text-white">Carrito de Compra</h2>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="cartItems"
            hide-default-footer
            class="elevation-0"
            item-key="title"
          >
            <template v-slot:item="{ item, index }">
              <tr>
                <td class="product-cell">{{ item.title }}</td>
                <td class="price-cell">{{ item.price }}</td>
                <td class="actions-cell">
                  <v-btn icon small color="error" @click="removeItem(index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="continueToCheckout"
            >Continuar Pedido</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Producto", value: "title", sortable: false },
        { text: "Precio", value: "price", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      cartItems: [
        { title: "Libro 1", price: "$10" },
        { title: "Libro 2", price: "$15" },
        { title: "Libro 3", price: "$20" },
      ],
    };
  },
  methods: {
    removeItem(index) {
      this.cartItems.splice(index, 1);
    },
    continueToCheckout() {
      // Realiza las acciones necesarias para continuar con el pedido
      // Puedes redirigir a una página de pago, mostrar un resumen del pedido, etc.
      console.log("Continuar pedido...");
    },
  },
};
</script>

<style>
.primary {
  background-color: #1976d2;
  color: #ffffff;
}

.product-cell,
.price-cell,
.actions-cell {
  text-align: center;
}

.product-cell {
  font-weight: bold;
}

.price-cell {
  color: #888;
}

.actions-cell {
  width: 80px;
}

.v-data-table thead th {
  background-color: #f5f5f5;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
}

.v-data-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.v-data-table tbody tr:hover {
  background-color: #f5f5f5;
}

.v-btn--icon.small {
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  padding: 0;
  line-height: 1;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
