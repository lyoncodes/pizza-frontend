<template>
<div class="menu">
  <div v-for="order in orders" :key="order.id" class="menu-item">
    <p>{{order.orderStatus}}</p>
    <p>{{order.orderId}}</p>
    <p>{{order.pizza}}</p>
    <button @click="deleteThis(order.orderId)">Delete Order</button>
  </div>
</div>
</template>
<script>
import api from '../services/api.js'
export default {
  name: 'LiveOrders',
  data () {
    return {
      orders: []
    }
  },
  async created () {
    const orders = await api.getOrders();
    this.orders = orders;
  },
  methods: {
    deleteThis(id){
      api.deleteOrder(id);
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