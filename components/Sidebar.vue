<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer style="margin-top: 80px;"
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
      >
        <v-list-item
            prepend-icon="mdi-map-plus"
            title="Load Data"
            nav
        >
          <template v-slot:append>
            <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-cloud-download-outline"
                       title="Url"
                       value="url"
                       @click="url_dialog = true"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-file-code-outline"
                       title="File"
                       value="file"
                        @click="file_dialog = true"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 600px;"></v-main>
    </v-layout>
  </v-card>
  <LoadUrl />
  <LoadFile />
</template>

<script setup lang="ts">
import { useDataStore} from "~/store/data_store";
const dataStore = useDataStore();
const { drawer, rail, url_dialog, file_dialog } = storeToRefs(dataStore);
</script>