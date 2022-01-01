<template>
<div class="menu">
  <div v-for="order in orders" :key="order.id" class="card-item col-sm">
    <button class="cx-cta card-btn" @click="deleteThis(order.orderId)">Delete</button >
    <button class="cx-cta card-btn" @click="deleteThis(order.orderId)">Done</button >
    <div class="card-item-content">
      <h3>{{order.name}}</h3>
      <div class="status-bar"></div>
      <h3>{{order.orderStatus}}</h3>
      <p class="caption">{{order.orderId}}</p>
    </div>
    <!-- <p>{{order.address}}</p> -->
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
    this.orders.forEach(async order => {
      order.name = await api.getPizza(order.pizza)
    })
  },
  methods: {
    deleteThis(id){
      api.deleteOrder(id);
    }
  }
}
</script>
<style scoped>
</style>