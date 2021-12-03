<template>

<div>
  <h1>{{ msg }}</h1>
  <div class="menu">
    <div v-for="pizza in menu" :key="pizza.id" class="menu-item">
      <Pizza :pizza="pizza" @addToOrder="addToOrderList($event.pizza)"/>
    </div>
  </div>
  <Cart :cart="this.orderList" class="cart"/>
</div>
</template>
<script>
import Pizza from './Pizza.vue';
import Cart from './Cart.vue';
export default {
  name: 'Menu',
  components: {
    Pizza,
    Cart
  },
  props: {
    msg: String,
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
    addToOrderList (pizza) {
      const newPizza = {
        id: pizza.id,
        name: pizza.name
      }
      this.orderList.push(newPizza);
    }
  }
}
</script>
<style scoped>
.cart{
  text-align: left;
  margin-left: 20px;
}
.menu{
  display: flex;
  flex-wrap: wrap;
}
.menu-item{
  border: 1px solid pink;
  margin: 10px;
  padding: 10px;
  width: 30%;
}
.menu-item:hover{
  background-color: rgba(253, 246, 236, 0.795);
  cursor: pointer;
}

@media (max-width: 1300px){
  .menu{
    justify-content: center;
  }
}
@media (max-width: 1000px){
  .menu{
    flex-direction: column;
  }
  .menu-item{
    width: 90%;
  }
}
</style>