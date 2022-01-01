<template>
  <div>
    <form @submit.prevent="register">
      <h1>Sign In</h1>
      <label for="username">Username</label>
      <input v-model="form.username" id="username" type="text" class="form-input" />
      <label for="password">Password</label>
      <input v-model="form.password" id="password" type="password" class="form-input" />
      <button class="cta" type="submit">Register</button>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      console.log('hi', this.form.username)
    }
  }

}
</script>
<style scoped>

</style>
