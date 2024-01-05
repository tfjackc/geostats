<template>
    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Geostats</v-app-bar-title>
      <v-btn
          variant="outlined"
          color="success"
      ><NuxtLink class="link" to="/">Data Analysis</NuxtLink>
      </v-btn>
      <v-btn
          variant="outlined"
          color="success"
          >
        <NuxtLink class="link" to="/map">Map</NuxtLink>
      </v-btn>
      <v-btn @click="toggleTheme"><v-icon icon="mdi-theme-light-dark" /></v-btn>
    </v-app-bar>
</template>
<script lang="ts" setup>
import { useDataStore} from "~/store/data_store";
const dataStore = useDataStore();
const { drawer } = storeToRefs(dataStore);
import { useTheme } from 'vuetify'
const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>