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
      <LGeoJson :geojson="geojson" :visible="layerCheckbox" :options="geojsonOptions" />
    </LMap>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const zoom = ref(4)
import { useDataStore } from "~/store/data_store";
import { storeToRefs } from "pinia";
const data_store = useDataStore();
const { geojson, layerCheckbox, selectedFields, geojsonOptions } = storeToRefs(data_store);
</script>

<style>
body {
  margin: 0;
}
</style>