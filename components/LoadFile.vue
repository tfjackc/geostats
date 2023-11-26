<template>
  <div class="text-center">
    <v-dialog
        v-model="file_dialog"
        width="auto"
    >
      <v-card>
        <v-card-title class="headline">Load GeoJSON File</v-card-title>
        <v-card-text>
          <v-sheet max-width="600" class="mx-auto">
            <v-file-input
                v-model="files"
                color="deep-purple-accent-4"
                counter
                label="File input"
                multiple
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                variant="outlined"
                :show-size="1000"
            >
              <template v-slot:selection="{ fileNames }">
                <template v-for="(fileName, index) in fileNames" :key="fileName">
                  <v-chip
                      v-if="index < 2"
                      color="deep-purple-accent-4"
                      label
                      size="small"
                      class="me-2"
                  >
                    {{ fileName }}
                  </v-chip>

                  <span
                      v-else-if="index === 2"
                      class="text-overline text-grey-darken-3 mx-2"
                  >
          +{{ files.length - 2 }} File(s)
        </span>
                </template>
              </template>
            </v-file-input>

              <v-btn
                  color="success"
                  type="submit"
                  block
                  class="mt-2"
                  text="Submit"
              ></v-btn>

          </v-sheet>          </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="file_dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/data_store";
const dataStore = useDataStore();
const { file_dialog, files } = storeToRefs(dataStore);
</script>

<style scoped>

</style>