<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useLocationsStore } from '@/stores/locations';
import type { Location } from '@/types';

import '@/assets/elements/store-list.scss';
import CbLoader from '@/components/CbLoader.vue';
import CbMap from '@/components/CbMap.vue';
import CbStoreSingle from '@/components/CbStoreSingle.vue';

const isLoading = ref(true);
const locations = useLocationsStore();

onMounted(async () => {
  await locations.fetchLocations();
  isLoading.value = false;
});

const locationList = computed((): Location[] => locations.locationList);
const locationsAvailable = computed(
  (): boolean => locationList.value.length > 0,
);
</script>

<template>
  <div class="container mx-auto">
    <cb-map v-if="isLoading || locationsAvailable" />

    <div
      v-if="isLoading || locationsAvailable"
      :class="[
        isLoading ? '' : 'cb-store-list',
        'px-5',
        'md:px-0',
        isLoading
          ? 'flex flex-col md:flex-row mt-20 md:mt-30 lg:mt-40 w-full justify-center items-center'
          : '',
      ]"
    >
      <cb-loader v-if="isLoading" />
      <div v-for="location in locationList" :key="location.id" class="cb-store">
        <cb-store-single :location="location" />
      </div>
    </div>
    <div v-else class="container mx-auto border p-10 my-10 md:my-20 lg:my-40">
      <div class="cb-heading-h2 uppercase poppins-bold">
        No stores available
      </div>
    </div>
  </div>
</template>

<style scoped></style>
