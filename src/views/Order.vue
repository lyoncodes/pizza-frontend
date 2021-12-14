<template>
<div>
  <Menu :menu="menu" @addToOrder="addToOrderList($event.pizza)"/>
  <Cart :cart="this.orderList" class="cart"/>
</div>
</template>
<script>
import Cart from './components/Cart.vue';
import Menu from './Menu.vue';
const axios = require('axios').default;

export default {
  name: 'NewOrder',
  components: {
    Cart,
    Menu
  },
  data () {
    return {
      orderList: [],
      menu: []
    }
  },
  async created () {
    await axios.get('https://89ggic0zqd.execute-api.us-west-1.amazonaws.com/latest/pizzas')
      .then(res => {
        this.menu = res.data
      })
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