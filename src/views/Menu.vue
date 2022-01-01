<template>
<div class="menu">
  <div v-for="pizza in menu" :key="pizza.id" class="card-item col-sm">
    <button class="cx-cta-green card-btn" @click="addPizza(pizza)">Add</button >
    <div class="card-item-content">
      <Pizza :pizza="pizza"/>
    </div>
  </div>
</div>
</template>
<script>
import Pizza from './components/Pizza.vue';
export default {
  name: 'Menu',
  components: {
    Pizza
  },
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      orderList: []
    }
  },
  methods: {
    addPizza (pizza) {
      this.$emit('addToOrder', { pizza })
    }
  }
}
</script>
<style scoped>
.cart{
  text-align: left;
  margin-left: 20px;
}
</style>