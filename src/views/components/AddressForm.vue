<template>
  <div>
    <form @submit.prevent="register" class="flex-form">
      <div class="form-group">
        <label for="street">Street</label>
        <input v-model="form.address.street" id="street" type="text" class="form-input" />
      </div>
      <div class="form-group">
        <label for="unit">Apt / Suite </label>
        <input v-model="form.address.unit" id="unit" type="text" class="form-input input-sm" />
      </div>
      <div class="form-group">
        <label for="zip">Zip Code</label>
        <input v-model="form.address.zip" id="zip" type="text" class="form-input" />
      </div>
      <div class="form-group">
        <label for="promo">Promo Code</label>
        <input v-model="form.promo" id="promo" type="promo" class="form-input" />
      </div>
      <div class="form-group ender">
        <button class="cta" type="submit"><a>Save For Order</a></button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AddressForm',
  data () {
    return {
      form: {
        address: {
          street: '',
          unit: '',
          zip: ''
        },
        promo: '',
      }
    }
  },
  methods: {
    async register () {
      this.$emit('order', {
        street: this.form.address.street,
        unit: this.form.address.unit,
        zip: this.form.address.zip,
        promo: this.form.promo
      })
    }
  }

}
</script>
<style scoped>
label{
  display: block;
  font-size: .75rem;
}
input{
  height: 30px;
  margin: 0px 5px;
}
.flex-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.flex-form .input-sm{
  width: 50px;
}
.ender{
  align-self: flex-end;
  margin: 2% 0 0 5px;
  width: 100%;
}
</style>
