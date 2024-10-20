import { defineStore } from 'pinia';
import type { Location, LocationStore } from '@/types';
import { getLocations } from '@/services/api';
import { Response } from 'superagent';
import get from 'lodash/get';

export const useLocationsStore = defineStore('locations', {
  state: (): LocationStore => ({
    locations: [],
  }),
  actions: {
    async fetchLocations(): Promise<void> {
      try {
        const response: Response = await getLocations();
        const locations = get(response, 'body[0]', []) as Location[];
        this.locations = locations;
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      }
    },
  },
  getters: {
    locationList: (state): Location[] => state.locations,
  },
});
