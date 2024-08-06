// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AdminLogin from '../components/admin/Login.vue';
import AdminDashboard from '../views/admin/Dashboard.vue';
import AdminRegister from '../components/admin/Register.vue'

const routes = [
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin,
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
  },
  {
    path: '/admin/register',
    name: 'AdminRegister',
    component: AdminRegister
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
