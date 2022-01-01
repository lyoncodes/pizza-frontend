<template>
<div>
  <div class="header-logo">
    <img src='../assets/pizza-nona.svg'>
  </div>
  <h1>Auntie Nona's Pizzeria</h1>
  <button class="cta">
    <router-link to="/new-order">New Order</router-link>
  </button>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
.header-logo{
  height: 100px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}
</style>