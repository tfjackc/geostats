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
import { ref } from 'vue'
const zoom = ref(4)
import { useDataStore } from "~/store/data_store";
import { storeToRefs } from "pinia";
const data_store = useDataStore();
const { geojson, layerCheckbox, selectedFields } = storeToRefs(data_store);

const geojsonOptions = {
  onEachFeature: function (feature, layer) {
    // Construct popup content based on feature properties
    let popupContent = '<div class="popup-content">';
    // Example: loop through selected fields and add them to the popup
    selectedFields.value.forEach(field => {
      if (feature.properties[field]) {
        popupContent += `<strong>${field}:</strong> ${feature.properties[field]}<br>`;
      }
    });
    popupContent += '</div>';
    // Bind the popup content to the layer
    layer.bindPopup(popupContent);
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>