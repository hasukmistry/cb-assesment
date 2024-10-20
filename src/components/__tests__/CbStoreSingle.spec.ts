import { render } from '@testing-library/vue';
import CbStoreSingle from '@/components/CbStoreSingle.vue';
import type { Location } from '@/types';

// Mock location data
const mockLocation: Location = {
  image: 'https://example.com/location.jpg',
  location_name: 'Sample Location',
  address_line: '123 Sample St, Sample City, SC',
  pin: '12345',
  share: 'Share this location',
};

describe('CbStoreSingle.vue', () => {
  it('renders location information correctly', () => {
    const { getByAltText, getByText } = render(CbStoreSingle, {
      props: { location: mockLocation },
    });

    const image = getByAltText(mockLocation.location_name);
    expect(image).to.exist;
    expect(image.src).to.equal(mockLocation.image);

    expect(getByText(mockLocation.location_name)).to.exist;
    expect(getByText(mockLocation.address_line)).to.exist;

    const pinLink = getByText(mockLocation.pin);
    expect(pinLink).to.exist;

    const shareLink = getByText(mockLocation.share);
    expect(shareLink).to.exist;
  });

  it('does not render anything if location is not provided', () => {
    const { container } = render(CbStoreSingle, {
      props: { location: null },
    });

    expect(container).to.be.empty;
  });
});
