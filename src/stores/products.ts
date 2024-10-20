import { defineStore } from 'pinia'
import type { Product, ProductStore } from '@/types'
import { getProducts } from '@/services/api'
import { Response } from 'superagent'
import get from 'lodash/get'

export const useProductsStore = defineStore('products', {
  state: (): ProductStore => ({
    products: [],
  }),
  actions: {
    async fetchProducts(): Promise<void> {
      try {
        const response: Response = await getProducts()
        const products = get(response, 'body[0]', []) as Product[]
        this.products = products
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    },
  },
  getters: {
    productList:
      state =>
      (startIndex: number, total: number): Product[] => {
        return state.products.slice(startIndex, startIndex + total)
      },
    productCount: (state): number => state.products.length,
  },
})
