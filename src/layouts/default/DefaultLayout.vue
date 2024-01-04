<template>
  <v-app>
    <app-bar />
    <!-- navigation -->
    <mr-nav />
    <!--// navigation -->
    <!-- content -->
    <view-layout />
    <!--// content -->
  </v-app>
</template>

<script setup>
import AppBar from '@/layouts/default/AppBar.vue'
import ViewLayout from '@/layouts/default/ViewLayout.vue'
import MrNav from '@/layouts/default/MrNav.vue'
</script>

<style lang="scss">
.v-toolbar {
  position: sticky !important;
}
</style>
