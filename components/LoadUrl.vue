<template>
    <div class="text-center">
      <v-dialog
          v-model="url_dialog"
          width="auto"
      >
        <v-card>
          <v-card-title class="headline">Load GeoJSON Web Service</v-card-title>
          <v-card-text>
            <v-sheet max-width="600" class="mx-auto">
              <v-form validate-on="submit lazy">
                <v-text-field
                    label="https://www.example.com/geojson"
                ></v-text-field>

                <v-btn
                    color="success"
                    type="submit"
                    block
                    class="mt-2"
                    text="Submit"
                ></v-btn>
              </v-form>
            </v-sheet>          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="url_dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script setup lang="ts">
import { useDataStore } from "~/store/data_store";
const dataStore = useDataStore();
const { url_dialog } = storeToRefs(dataStore);
</script>

<style scoped>

</style>