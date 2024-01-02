<template>
  <v-app>
    <default-bar />

    <mr-nav />

    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from "@/layouts/default/AppBar.vue";
import DefaultView from "@/layouts/default/ViewLayout.vue";
import MrNav from "@/layouts/default/MrNav.vue";
</script>

<style lang="scss">
.v-toolbar {
  position: sticky !important;
}
</style>
