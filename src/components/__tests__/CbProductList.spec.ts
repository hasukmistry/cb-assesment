import { mount, flushPromises } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useProductsStore } from '@/stores/products';
import CbProductList from '@/components/CbProductList.vue';
import CbLoader from '@/components/CbLoader.vue';
import CbProductSingle from '@/components/CbProductSingle.vue';

// Mock the products store
vi.mock('@/stores/products', () => ({
  useProductsStore: vi.fn(),
}));

const mockProducts = [
  { id: 1, product_name: 'Product 1', price: 10 },
  { id: 2, product_name: 'Product 2', price: 20 },
  { id: 3, product_name: 'Product 3', price: 30 },
  { id: 4, product_name: 'Product 4', price: 40 },
  { id: 5, product_name: 'Product 5', price: 50 },
  { id: 6, product_name: 'Product 6', price: 60 },
  { id: 7, product_name: 'Product 7', price: 70 },
  { id: 8, product_name: 'Product 8', price: 80 },
  { id: 9, product_name: 'Product 9', price: 90 },
  { id: 10, product_name: 'Product 10', price: 100 },
  { id: 11, product_name: 'Product 11', price: 110 },
  { id: 12, product_name: 'Product 12', price: 120 },
  { id: 13, product_name: 'Product 13', price: 130 },
  { id: 14, product_name: 'Product 14', price: 140 },
];

describe('ProductList.vue', () => {
  let store: ReturnType<typeof useProductsStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = {
      products: mockProducts,
      fetchProducts: vi.fn().mockResolvedValueOnce(undefined),
      productCount: mockProducts.length,
      productList: vi.fn((startIndex: number, total: number) =>
        mockProducts.slice(startIndex, startIndex + total),
      ),
    };
    (useProductsStore as unknown as vi.Mock).mockReturnValue(store);
  });

  it('renders loader initially and fetches products', async () => {
    const wrapper = mount(CbProductList, {
      global: {
        components: { CbLoader, CbProductSingle },
      },
    });

    // Ensure the loader is shown initially
    expect(wrapper.findComponent(CbLoader).exists()).toBe(true);

    await flushPromises();

    // Ensure products are fetched and rendered
    expect(store.fetchProducts).toHaveBeenCalled();
    expect(wrapper.findAllComponents(CbProductSingle).length).toBe(6);
  });

  it('displays "No products available" when no products are loaded', async () => {
    store.products = [];
    store.productCount = 0;

    const wrapper = mount(CbProductList, {
      global: {
        components: { CbLoader, CbProductSingle },
      },
    });

    await flushPromises();

    expect(wrapper.text()).toContain('No products available');
  });

  it('loads more products when "Load More" is clicked', async () => {
    const wrapper = mount(CbProductList, {
      global: {
        components: { CbLoader, CbProductSingle },
      },
    });

    await flushPromises();

    const loadMoreButton = wrapper.find(
      '.cb-product-list__load-more > a.cb-loadmore',
    );
    expect(loadMoreButton.exists()).toBe(true);

    // Click the "Load More" button
    await loadMoreButton.trigger('click');

    // Check if productList was called with the correct parameters
    expect(store.productList).toHaveBeenCalledWith(6, 6);
    expect(wrapper.findAllComponents(CbProductSingle).length).toBe(12);

    // Click the "Load More" button
    await loadMoreButton.trigger('click');

    expect(store.productList).toHaveBeenCalledWith(12, 6);
    expect(wrapper.findAllComponents(CbProductSingle).length).toBe(14);
  });

  it('hides the "Load More" button when all products are loaded', async () => {
    const wrapper = mount(CbProductList, {
      global: {
        components: { CbLoader, CbProductSingle },
      },
    });

    await flushPromises();

    const loadMoreButton = wrapper.find(
      '.cb-product-list__load-more > a.cb-loadmore',
    );
    expect(loadMoreButton.exists()).toBe(true);

    // Simulate loading all products
    store.productCount = 14;

    await loadMoreButton.trigger('click');
    expect(wrapper.findAllComponents(CbProductSingle).length).toBe(12);

    await loadMoreButton.trigger('click');
    expect(wrapper.findAllComponents(CbProductSingle).length).toBe(14);

    expect(
      wrapper.find('.cb-product-list__load-more > a.cb-loadmore').exists(),
    ).toBe(false);
  });
});
