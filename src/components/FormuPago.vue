<template>
  <div>
      <h3 style="text-align: center; margin-bottom: 20px; margin-top: 20px;">Información de Pago</h3>
      <div class="payment-form">
        <form @submit.prevent="submitPayment">
          <div class="form-group">
            <label for="cardName">Nombre en la tarjeta</label>
            <input id="cardName" v-model="cardName" type="text" required class="input-field">
          </div>
          <div class="form-group">
            <label for="cardNumber">Número de tarjeta</label>
            <input id="cardNumber" v-model="cardNumber" type="text" required class="input-field">
          </div>
          <div class="form-group">
            <label for="expiryDate">Fecha de vencimiento</label>
            <input id="expiryDate" v-model="expiryDate" type="text" required class="input-field">
          </div>
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input id="cvv" v-model="cvv" type="text" required class="input-field">
          </div>
          <button type="submit" class="pay-button" @click="IrGracias()">Pagar</button>
        </form>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
  },
  methods: {
    ...mapMutations([
      'clearCart' 
    ]),
    async IrGracias() {
      await this.$store.dispatch('submitOrder');
      this.clearCart();
      this.$router.push('/Gracias');
    }
  },
};
</script>

<style scoped>
.payment-form {
  padding: 5%;
  max-width: 500px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: aliceblue;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.pay-button {
  width: 100%;
  padding: 15px;
  background-color: #80461b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.pay-button:hover {
  background-color: #643716;
}
</style>
