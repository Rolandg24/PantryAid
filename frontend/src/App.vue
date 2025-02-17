<template>
  <div id="app">
    <h1>Welcome to Pantry Aid</h1>
    <p v-if="loading">Loading...</p>
    <p v-else>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from './api.js'; // Ensure you create this file

const message = ref('');
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await api.get('/hello');
    message.value = response.data;
  } catch (error) {
    message.value = 'Failed to connect to backend';
    console.error('Error:', error);
  } finally {
    loading.value = false;
  }
});
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

