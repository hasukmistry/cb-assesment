<script setup lang="ts">
import type { Product } from '@/types';

defineProps<{
  product: Product | null;
}>();
</script>

<template>
  <div v-if="product" class="cb-product-image-wrapper">
    <a href="#">
      <img
        class="cb-product-image"
        :src="product.image"
        :alt="product.product_name"
        :title="product.product_name"
      />
    </a>
  </div>
  <div v-if="product" class="cb-product-description">
    <a class="poppins-bold uppercase" href="#">
      {{ product.product_name }}
    </a>
    <div class="poppins-bold">£{{ product.price }}</div>
  </div>
</template>

<style scoped></style>
