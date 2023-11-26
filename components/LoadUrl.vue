<template>
    <div class="text-center">
      <v-dialog
          v-model="dialog"
          width="auto"
      >
        <v-card>
          <v-card-title class="headline">Load GeoJSON Web Service</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script setup lang="ts">
import { useDataStore } from "~/store/data_store";
const dataStore = useDataStore();
const { dialog } = storeToRefs(dataStore);
</script>

<style scoped>

</style>