<template>

<div class="pizza">

  <h3>{{ pizza.name }}</h3>
  <span v-for="(ingredient, idx) in pizza.ingredients" :key="idx">
    <span> {{ ingredient }}, </span>
  </span>

</div>
</template>
<script>
export default {
  name: 'Pizza',
  props: {
    pizza: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
span{
  display: inline;
}
.pizza{
  text-align: left;
}
</style>