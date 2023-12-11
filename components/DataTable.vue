<template>

</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data_store";
const data_store = useDataStore();
const { selectedFields, fieldNames } = storeToRefs(data_store);

</script>

<style scoped>

</style>