import { setActivePinia, createPinia } from 'pinia';
import { useProductsStore } from '@/stores/products';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { getProducts } from '@/services/api';
import type { Product } from '@/types';

// Mock the API call using Vitest's `vi.mock`
vi.mock('@/services/api', () => ({
  getProducts: vi.fn(),
}));

const mockProducts: Product[] = [
  { id: 1, product_name: 'Product 1', price: 10 },
  { id: 2, product_name: 'Product 2', price: 20 },
  { id: 3, product_name: 'Product 3', price: 30 },
];

describe('useProductsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with an empty products array', () => {
    const store = useProductsStore();
    expect(store.products).toEqual([]);
  });

  it('fetches and stores products correctly', async () => {
    // Mock API response
    (getProducts as vi.Mock).mockResolvedValue({
      body: [mockProducts],
    });

    const store = useProductsStore();
    await store.fetchProducts();

    expect(store.products).toEqual(mockProducts);
  });

  it('handles API errors gracefully', async () => {
    // Mock a rejected API response
    (getProducts as vi.Mock).mockRejectedValue(new Error('API Error'));

    const store = useProductsStore();
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await store.fetchProducts();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Failed to fetch products:',
      expect.any(Error),
    );
    expect(store.products).toEqual([]);

    consoleErrorSpy.mockRestore();
  });

  it('productList getter returns the correct subset of products', () => {
    const store = useProductsStore();
    store.products = mockProducts;

    const result = store.productList(1, 2); // Get products starting from index 1, with a total of 2
    expect(result).toEqual([
      { id: 2, product_name: 'Product 2', price: 20 },
      { id: 3, product_name: 'Product 3', price: 30 },
    ]);
  });

  it('productCount getter returns the correct product count', () => {
    const store = useProductsStore();
    store.products = mockProducts;

    expect(store.productCount).toBe(3);
  });
});
