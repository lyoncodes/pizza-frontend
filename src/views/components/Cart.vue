<template>

<div>
  <div v-if="cart.length">
    <h3>{{ this.msg }}</h3>
    <span class="counter">{{ cart.length }}</span>
  </div>
  <div v-for="order in cart" :key="order.id">
    <div>{{ order.name }}</div>
  </div>
  <button v-if="cart.length" @click="checkout"> Checkout </button>
</div>
</template>
<script>
import api from '../../services/api.js'
export default {
  name: 'Cart',
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      msg: 'Your Order'
    }
  },
  methods: {
    checkout(){
      api.createOrder(this.cart[0], 'test')
      console.log(this.cart)
    }
  }
}
</script>
<style scoped>
h3{
  display: inline;
}
.counter{
  margin-left: 15px;
  font-weight: 700;
}
</style>