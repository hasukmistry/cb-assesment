<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useProductsStore } from '@/stores/products'
import type { Product } from '@/types'

import '@/assets/elements/product-list.scss'
import CbLoader from '@/components/CbLoader.vue'
import CbProductSingle from '@/components/CbProductSingle.vue'

const isLoading = ref(true)
const products = useProductsStore()

onMounted(async () => {
  await products.fetchProducts()
  loadMore()
  isLoading.value = false
})

const startIndex = ref(0)
const total = ref(6)
const productList = ref<Product[]>([])
const productCount = computed((): number => products.productCount)

const canLoadMore = computed(
  (): boolean => startIndex.value < productCount.value,
)

const loadMore = () => {
  if (!canLoadMore.value) return

  const nextProducts = products.productList(startIndex.value, total.value)
  productList.value.push(...nextProducts)
  startIndex.value += total.value
}

const productsAvailable = computed((): boolean => productList.value.length > 0)
</script>

<template>
  <div class="container mx-auto" v-if="isLoading || productsAvailable">
    <div
      :class="[
        isLoading ? '' : 'cb-product-list',
        'px-5',
        'md:px-0',
        isLoading
          ? 'flex flex-col md:flex-row mt-20 md:mt-30 lg:mt-40 w-full justify-center items-center'
          : '',
      ]"
    >
      <cb-loader v-if="isLoading" />
      <div v-for="product in productList" :key="product.id" class="cb-product">
        <cb-product-single :product="product" />
      </div>
    </div>
    <div class="cb-product-list__load-more px-5 md:px-0">
      <a v-if="canLoadMore" @click="loadMore" class="poppins-semibold">
        Load More
      </a>
    </div>
  </div>
  <div v-else class="container mx-auto border p-10 my-10 md:my-20 lg:my-40">
    <div class="cb-heading-h2 uppercase poppins-bold">
      No products available
    </div>
  </div>
</template>

<style scoped></style>
