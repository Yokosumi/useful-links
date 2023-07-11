<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex rounded bg-neutral text-neutral-content p-3">
      <div class="mx-4">
        <RouterLink to="/home">Home</RouterLink>
      </div>
      <div class="mx-4">
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
