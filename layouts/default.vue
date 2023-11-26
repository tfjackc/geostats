<template>
  <v-layout class="rounded rounded-md">
    <AppBar />
    <Sidebar />
    <v-main class="d-flex align-center justify-center">
     <slot />
    </v-main>
  </v-layout>
</template>
<script setup lang="ts">
import AppBar from "~/components/AppBar.vue";
import Sidebar from "~/components/Sidebar.vue";
</script>