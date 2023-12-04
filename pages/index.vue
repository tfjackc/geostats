<template>
  <v-window v-model="tab">
    <v-window-item
        :value="1">
      <h1>Data Crunch</h1>
    </v-window-item>
    <v-window-item
        :value="2">
      <v-col>
        <Map />
      </v-col>
    </v-window-item>
  </v-window>
</template>

<script setup lang="ts">
import Map from '~/components/Map.vue'
import { useDataStore } from "~/store/data_store";
import { storeToRefs } from "pinia";
const data_store = useDataStore();
const { tab } = storeToRefs(data_store);
</script>

<style scoped>

</style>