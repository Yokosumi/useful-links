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
      <div class="mx-4">
        <RouterLink to="/generators">Generators</RouterLink>
      </div>
      <div class="mx-4">
        <RouterLink to="/icons">Icons</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
