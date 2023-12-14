<template>
  <v-data-table
      :headers="headers"
      :items="layerData"
      :items-per-page="7"
      class="elevation-10"
  ></v-data-table>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data_store";
const data_store = useDataStore();
const { headers, layerData } = storeToRefs(data_store);

</script>

<style scoped>

</style>