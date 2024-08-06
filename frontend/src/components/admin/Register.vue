<!-- src/components/admin/Register.vue -->
<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4" style="width: 300px;">
      <h3 class="text-center mb-4">Admin Register</h3>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" v-model="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" required>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </form>
      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match';
        return;
      }
      
      this.error = null;
      try {
        // Implement your registration logic here, such as making a request to your backend API
        const response = await axios.post('/api/register', {
          email: this.email,
          password: this.password,
        });
        // Handle successful registration (e.g., redirect to login page)
        this.$router.push('/admin/login');
      } catch (error) {
        this.error = 'Registration failed';
      }
    },
  },
};
</script>

<style scoped>
.vh-100 {
  min-height: 100vh;
}
</style>
