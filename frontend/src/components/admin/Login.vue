<!-- src/components/admin/Login.vue -->
<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4" style="width: 300px;">
      <h3 class="text-center mb-4">Admin Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" v-model="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
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
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      // Implement your login logic here, for example, making a request to your backend API
      try {
        this.error = null;
        // Dummy check, replace with actual authentication logic
        if (this.email === 'admin@admin.com' && this.password === 'password') {
          // On successful login, redirect to admin dashboard
          this.$router.push('/admin/dashboard');
        } else {
          this.error = 'Invalid email or password';
        }
      } catch (error) {
        this.error = 'Login failed';
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
