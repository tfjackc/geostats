<template>
<h1>Exploratory Data Analysis</h1>
  <DataTable />
</template>

<script setup lang="ts">
import DataTable from '~/components/DataTable.vue'
import { useDataStore } from "~/store/data_store";
import { storeToRefs } from "pinia";
const data_store = useDataStore();
</script>

<style scoped>

</style>