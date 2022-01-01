<template>
<div>
  <div v-if="cart.length" class="card-item cart-list">
    <div class="card-item-content cart-content">
      <h4>Your Order:</h4>
      <div v-for="order in cart" :key="order.id">
        <span>{{ order.name }} {{ order.quanitity }}</span>
      </div>
    </div>
    <div v-if="showForm" class="card-item-content cart-content">
      <AddressForm @order="assignDetails"/>
    </div>
    <div v-if="!showForm && orderDetails.address.length" class="card-item-content cart-content">
      <AddressDetails :address="orderDetails.address"/>
      <button class="cta" @click="checkout"><a>Checkout</a></button>
    </div>
  </div>
</div>
</template>
<script>
import api from '../../services/api.js'
import AddressForm from '../components/AddressForm.vue'
import AddressDetails from '../components/AddressDetails.vue'
export default {
  name: 'Cart',
  components: {
    AddressForm,
    AddressDetails
  },
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      orderDetails: {
        address: ''
      },
      showForm: true
    }
  },
  methods: {
    assignDetails(payload) {
      this.orderDetails = payload
      if (payload.street && payload.zip) {
        this.orderDetails.address = `${payload.street} ${payload.unit}`
      }
      this.showForm = !this.showForm
    },
    checkout() {
      this.cart.forEach(item => {
        api.createOrder(item, this.orderDetails.address)
      })
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.cart-list{
  display: flex;
  position: absolute;
  /* flex-direction: column; */
  /* bottom: 10; */
  right: 0;
}
.cart-content {
  margin-left: 2em;
}
.counter{
  font-size: 1.5em;
  font-weight: 700;
}
</style>