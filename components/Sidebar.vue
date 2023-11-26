<template>
<v-navigation-drawer
    v-model="drawer"
    :width="275">
<v-list>
  <v-list-item title="Navigation drawer"></v-list-item>
</v-list>
</v-navigation-drawer>
</template>

<script setup lang="ts">
import { useDataStore} from "~/store/data_store";
const dataStore = useDataStore();
const { drawer } = storeToRefs(dataStore);
</script>