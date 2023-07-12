<template>
  <div>
    <h1>{message}</h1>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const message = ref('Hello, World!')

    return {
      message
    }
  }
})
</script>
