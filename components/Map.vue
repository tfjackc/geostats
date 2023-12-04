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

      <LGeoJson :geojson="geojson" :visible="layerCheckbox" />
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(4)
import { useDataStore } from "~/store/data_store";
import { onMounted } from 'vue'
import { storeToRefs } from "pinia";
const data_store = useDataStore();
const { geojson, layerCheckbox } = storeToRefs(data_store);

// onMounted(async() => {
//  await data_store.getFiles()
// })
</script>

<style>
body {
  margin: 0;
}
</style>