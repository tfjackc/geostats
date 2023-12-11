<template>
    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Geostats</v-app-bar-title>
        <v-spacer></v-spacer>
      <v-tabs
          v-model="tab"
          color="success"
          align-tabs="end"
      >
        <v-tab :value="1">Data Analysis</v-tab>
        <v-tab :value="2">Map</v-tab>
      </v-tabs>
      <v-btn @click="toggleTheme"><v-icon icon="mdi-theme-light-dark" /></v-btn>
    </v-app-bar>
</template>
<script lang="ts" setup>
import { useDataStore} from "~/store/data_store";
const dataStore = useDataStore();
const { drawer, tab } = storeToRefs(dataStore);
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>