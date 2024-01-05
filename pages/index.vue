<template>
  <DataWindow />
</template>

<script setup lang="ts">
import Map from '~/components/Map.vue'
import DataWindow from '~/components/DataWindow.vue'
import { useDataStore } from "~/store/data_store";
import { storeToRefs } from "pinia";
const data_store = useDataStore();
const { tab } = storeToRefs(data_store);
</script>

<style scoped>

</style>