<template>
  <div class="map-container">
    <LMap
        :useGlobalLeaflet="false"
        ref="map"
        :zoom="zoom"
        :center="[46.982639, -108.519417]"
    >
      <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(4)
</script>

<style>
body {
  margin: 0;
}
</style>