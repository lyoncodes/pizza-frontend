<template>
  <h1>Auntie Nona's Pizzeria</h1>
  <Menu msg="Menu" :menu="this.dataStore" />
</template>

<script>
import Menu from './components/Menu.vue'

const axios = require('axios').default;

export default {
  name: 'App',
  components: {
    Menu,
  },
  data () {
    return {
      dataStore: [],
    }
  },
  mounted () {
    axios.get('https://89ggic0zqd.execute-api.us-west-1.amazonaws.com/latest/pizzas')
      .then(res => {
        this.dataStore = res.data
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
