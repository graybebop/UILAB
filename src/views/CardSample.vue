<template>
  <v-container class="content-wrap">
    <div class="section-wrap">
      <div class="text-h3">여행이 돌아왔어요!</div>
      <v-container class="">
        <v-row>
          <v-col v-for="n in 4" :key="n" cols="3">
            <v-card max-width="344px">
              <v-img
                src="https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_large_square_1535949304.jpg?1535949304"
                alt="https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_large_square_1535949304.jpg?1535949304"
              ></v-img>
              <v-card-title>a</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card
              class="mx-auto"
              max-width="400"
              height="400"
              image="https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_large_square_1535949304.jpg?1535949304"
              alt="https://d2ur7st6jjikze.cloudfront.net/landscapes/4737_large_square_1535949304.jpg?1535949304"
            >
              <v-card-title>TItle</v-card-title>
              <v-card-subtitle>subTitle</v-card-subtitle>
              <v-card-actions>
                <v-btn>버튼</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-row>
      <v-col v-for="(variant, i) in variants" :key="i" cols="3">
        <v-card class="mx-auto" max-width="344" variant="outlined">
          <v-img src="https://d6bztw1vgnv55.cloudfront.net/1504819/offer_photos/146151/991341_original_1703825356.jpg?width=480&height=360&quality=70" cover></v-img>

          <v-card-title class="line-2"> 모하니의 힐링 여행 4박 5일 삿포로/죠잔케이 #비에이후라노 #JR패스 모하니의 힐링 여행 4박 5일 삿포로/죠잔케이 #비에이후라노 #JR패스 삿포로 𐤟 패키지</v-card-title>

          <v-card-subtitle> 1,444,000원 </v-card-subtitle>

          <v-card-actions>
            <v-btn> Button </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useDisplay } from 'vuetify'
const variants = ['elevated', 'flat', 'tonal', 'outlined']
const { name } = useDisplay()

const width = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs':
      return 220
    case 'sm':
      return 400
    case 'md':
      return 500
    case 'lg':
      return 600
    case 'xl':
      return 800
    case 'xxl':
      return 1200
  }

  return undefined
})

onMounted(() => {
  console.log(width)
})
</script>
