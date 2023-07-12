<template>
  <div class="card w-96 bg-base-100 shadow-xl mt-3">
    <figure>
      <a :href="jasonData[0].url"><img :src="jasonData[0].image" alt="preview" /> </a>
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ jasonData[0].name }}
        <div class="badge badge-secondary">Icons</div>
        <div class="badge badge-primary">Animated</div>
      </h2>
      <p>If a dog chews shoes, whose shoes does he choose?</p>
      <div class="card-actions justify-end"></div>
    </div>
  </div>
</template>

<script>
import json from '../data/data.json'

export default {
  data() {
    return {
      jasonData: json
    }
  }
}
</script>
