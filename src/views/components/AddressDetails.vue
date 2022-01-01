<template>
  <div>
    <h4>Address:</h4>
    <p>{{ address }}</p>
  </div>
</template>
<script>
export default {
  name: 'AddressDetails',
  props: {
    address: {
      type: String,
      required: true
    }
  }

}
</script>
<style scoped>
h4{
  margin-bottom: 0;
}
p{
  margin-top: 0;
}
</style>
