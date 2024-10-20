<script setup lang="ts">
import type { Location } from '@/types'
import CbIconLocation from '@/components/svg/CbIconLocation.vue'
import CbIconPin from '@/components/svg/CbIconPin.vue'
import CbIconShare from '@/components/svg/CbIconShare.vue'

defineProps<{
  location: Location
}>()

const trimString = (str: string): string => {
  return str.length > 25 ? str.substring(0, 25) + '...' : str
}
</script>

<template>
  <div v-if="location" class="flex flex-col md:flex-row items-center">
    <div class="cb-store-image-wrapper">
      <a href="#">
        <img
          class="cb-store-image"
          :src="location.image"
          :alt="location.location_name"
          :title="location.location_name"
        />
      </a>
    </div>
    <div class="cb-store-description">
      <a class="cb-store-link poppins-bold uppercase" href="#">
        {{ location.location_name }}
      </a>
      <a class="cb-store-additional-link poppins-regular items-center" href="#">
        <cb-icon-location width="30" height="30" />
        {{ location.address_line }}
      </a>
      <a
        class="cb-store-additional-link poppins-regular items-center"
        href="#"
        :title="location.pin"
      >
        <cb-icon-pin width="30" height="30" />
        {{ trimString(location.pin) }}
      </a>
      <a
        class="cb-store-additional-link poppins-regular items-center"
        href="#"
        :title="location.share"
      >
        <cb-icon-share width="30" height="30" />
        {{ trimString(location.share) }}
      </a>
    </div>
  </div>
</template>

<style scoped></style>
