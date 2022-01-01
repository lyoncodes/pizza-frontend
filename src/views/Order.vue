<template>
<div>
  <Menu :menu="menu" @addToOrder="addToOrderList($event.pizza)"/>
  <Cart :cart="this.orderList"/>
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
      const ref = this.orderList.find(el => el.id === pizza.id)
      if (!ref) {
        const newPizza = {
          id: pizza.id,
          name: pizza.name,
          quanitity: 1
        }
        this.orderList.push(newPizza)
      } else {
        ref.quanitity++
      }
    }
  }
}
</script>
<style scoped>
</style>