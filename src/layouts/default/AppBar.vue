<template>
  <v-app-bar :elevation="0" class="border-b">
    <template #prepend>
      <div class="d-flex logo-wrap">
        <div class="logo-title">마이리얼팁</div>
        <v-text-field placeholder="도시나 상품을 검색해 보세요." hide-details="auto" clearable prepend-inner-icon="mdi-magnify" density="compact" :variant="variant" v-model="inputValue" @focus="handleFocus" @blur="handleBlur"></v-text-field>
      </div>
    </template>

    <template #append>
      <v-btn>로그인</v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<style lang="scss">
.logo-wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  max-width: 50%;
}

.v-toolbar__prepend {
  width: 100%;
}
.logo-wrap {
  .v-text-field {
    background-color: #f7f7f7;
    transition: all 0.5s;
  }
}
</style>
<script setup>
import { ref, computed } from "vue";

const inputValue = ref("");
const isFocused = ref(false);
const variant = computed(() => (isFocused.value ? "solo" : "standard"));

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
</script>
