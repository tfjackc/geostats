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
              <v-form
                  v-model="form"
                  @submit.prevent="data_store.getGeoJSONWebService()">
                <v-text-field
                    v-model="searchedValue"
                    label="https://www.example.com/geojson"
                    :rules="[required]"
                    clearable: boolean=""
                ></v-text-field>
                <v-text-field
                    v-model="layerName"
                    label="Name"
                    :rules="[required]"
                    clearable: boolean=""
                ></v-text-field>
                <v-btn
                    :disabled="!form"
                    :loading="loading"
                    color="success"
                    type="submit"
                    block
                    class="mt-2"
                    text="Submit"
                ></v-btn>
              </v-form>
            </v-sheet>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="url_dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDataStore } from "~/store/data_store";
const data_store = useDataStore();
const { url_dialog, searchedValue, form, loading, layerName } = storeToRefs(data_store);

function required (v: any) {
  return !!v || 'Field is required'
}
</script>

<style scoped>

</style>