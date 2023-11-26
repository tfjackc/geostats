<template>
    <v-app-bar>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Geostats</v-app-bar-title>
    </v-app-bar>
</template>
<script lang="ts" setup>
import { useDataStore} from "~/store/data_store";
const dataStore = useDataStore();
const { drawer } = storeToRefs(dataStore);
</script>