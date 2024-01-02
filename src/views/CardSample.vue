<template>
  <v-container class="content-wrap">
    <v-row align="center" justify="center">
      <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
        <v-card class="mx-auto" max-width="344" :variant="variant">
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ variant }}
              </div>
              <div class="text-h6 mb-1">Headline</div>
              <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
            </div>
          </v-card-item>

          <v-card-actions>
            <v-btn> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
import { onMounted, computed } from "vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();

const width = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case "xs":
      return 220;
    case "sm":
      return 400;
    case "md":
      return 500;
    case "lg":
      return 600;
    case "xl":
      return 800;
    case "xxl":
      return 1200;
  }

  return undefined;
});

onMounted(() => {
  console.log(width);
});
</script>
