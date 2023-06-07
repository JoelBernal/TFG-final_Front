<template>
<div >
    <h3 style="text-align: center;margin-bottom: 20px;margin-top: 20px;">Información de Pago</h3>
    <div class="payment-form">
      <form @submit.prevent="submitPayment">
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
        <button type="submit" style="width: 100%;" class="pay-button" @click="IrGracias() ">Pagar</button>
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
