import { setActivePinia, createPinia } from 'pinia';
import { useLocationsStore } from '@/stores/locations';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { getLocations } from '@/services/api';
import type { Location } from '@/types';

// Mock the API call using Vitest's `vi.mock`
vi.mock('@/services/api', () => ({
  getLocations: vi.fn(),
}));

const mockLocations: Location[] = [
  {
    image: 'https://example.com/image.jpg',
    location_name: 'Test Location',
    address_line: '123 Test Street',
    pin: '123456',
    share: 'Share123',
  },
];

describe('useLocationsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with an empty locations array', () => {
    const store = useLocationsStore();
    expect(store.locations).toEqual([]);
  });

  it('fetches and stores locations correctly', async () => {
    // Mock API response
    (getLocations as vi.Mock).mockResolvedValue({
      body: [mockLocations],
    });

    const store = useLocationsStore();
    await store.fetchLocations();

    expect(store.locations).toEqual(mockLocations);
  });

  it('handles API errors gracefully', async () => {
    // Mock a rejected API response
    (getLocations as vi.Mock).mockRejectedValue(new Error('API Error'));

    const store = useLocationsStore();
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await store.fetchLocations();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Failed to fetch locations:',
      expect.any(Error),
    );
    expect(store.locations).toEqual([]);

    consoleErrorSpy.mockRestore();
  });

  it('locationList getter returns the correct list', async () => {
    const store = useLocationsStore();
    store.locations = mockLocations;

    expect(store.locationList).toEqual(mockLocations);
  });
});
