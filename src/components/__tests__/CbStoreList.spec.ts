import { mount, flushPromises } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CbStoreList from '@/components/CbStoreList.vue';
import { useLocationsStore } from '@/stores/locations';
import CbLoader from '@/components/CbLoader.vue';
import CbMap from '@/components/CbMap.vue';
import CbStoreSingle from '@/components/CbStoreSingle.vue';

// Mocking the store
vi.mock('@/stores/locations', () => ({
  useLocationsStore: vi.fn(),
}));

describe('StoreList.vue', () => {
  let mockLocationsStore: any;

  beforeEach(() => {
    mockLocationsStore = {
      locations: [],
      fetchLocations: vi.fn().mockResolvedValue(void 0),
      locationList: [],
    };
    (useLocationsStore as any).mockReturnValue(mockLocationsStore);
  });

  it('displays loader while fetching locations', async () => {
    const wrapper = mount(CbStoreList, {
      global: {
        components: { CbLoader, CbMap, CbStoreSingle },
      },
    });

    expect(wrapper.findComponent(CbLoader).exists()).toBe(true);

    await flushPromises();

    // After loading, the loader should be removed
    expect(wrapper.findComponent(CbLoader).exists()).toBe(false);
  });

  it('renders the map and stores when locations are available', async () => {
    // Mocking available locations
    mockLocationsStore.locationList = [
      {
        id: 1,
        location_name: 'Store 1',
        address_line: 'Address 1',
        pin: '12345',
        share: 'Share this location',
      },
      {
        id: 2,
        location_name: 'Store 2',
        address_line: 'Address 2',
        pin: '67890',
        share: 'Share this location',
      },
    ];

    const wrapper = mount(CbStoreList, {
      global: {
        components: { CbLoader, CbMap, CbStoreSingle },
      },
    });

    await flushPromises();

    // Check if the map is displayed
    expect(wrapper.findComponent(CbMap).exists()).toBe(true);

    // Check if the correct number of stores is rendered
    const storeComponents = wrapper.findAllComponents(CbStoreSingle);
    expect(storeComponents.length).toBe(2);

    // Check if store information is passed correctly to the component
    expect(storeComponents[0].props('location')).toEqual({
      id: 1,
      location_name: 'Store 1',
      address_line: 'Address 1',
      pin: '12345',
      share: 'Share this location',
    });
  });

  it('shows a message when no stores are available', async () => {
    // Ensure no locations are available
    mockLocationsStore.locationList = [];

    const wrapper = mount(CbStoreList, {
      global: {
        components: { CbLoader, CbMap, CbStoreSingle },
      },
    });

    await flushPromises();

    // Check if the "No stores available" message is displayed
    expect(wrapper.text()).toContain('No stores available');
  });
});
