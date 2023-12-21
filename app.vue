<template>
  <loadingspinner v-if="isLoading" />
  <div v-else>
    <NuxtLayout />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000); // 2秒間はisLoadingをtrueに保つ
});

onUnmounted(() => {
  isLoading.value = true;
});
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
