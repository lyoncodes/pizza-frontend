<template>
<div class="menu">
  <div v-for="pizza in menu" :key="pizza.id" @click="addPizza(pizza)" class="menu-item">
    <Pizza :pizza="pizza"/>
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