<template>
  <v-container>
  <v-row>
    <v-col class="d-flex justify-center">
  <h1>Exploratory Data Analysis</h1>
    </v-col>
  </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <p>Load GeoJSON data from one of the sidebar options & select fields of interest in the drop down menu.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <p v-if="fieldNames.length > 0">Web Service: {{searchedValue}}</p>
      </v-col>
    </v-row>
  <v-row>
  <v-col class="d-flex justify-center">
    <v-select
        v-model="selectedFields"
        clearable
        chips
        label="Select"
        :items="fieldNames"
        multiple
    ></v-select>
  </v-col>
  </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn v-if="selectedFields.length > 0"
               color="success"
               @click="data_store.createTable"
        >Create Table</v-btn>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-btn v-if="headers.length > 0"
               color="success"
        >Go To Map</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center">
        <v-data-table
            :headers="headers"
            :items="layerData"
            :items-per-page="10"
            class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
  <DataTable />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import DataTable from '~/components/DataTable.vue'
import { useDataStore } from "~/store/data_store";
const data_store = useDataStore();
const { fieldNames, selectedFields, searchedValue, headers, layerData } = storeToRefs(data_store);
</script>

<style scoped>

</style>