import { render } from '@testing-library/vue';
import CbProductSingle from '@/components/CbProductSingle.vue';
import type { Product } from '@/types';

// Mock product data
const mockProduct: Product = {
  image: 'https://example.com/image.jpg',
  product_name: 'Sample Product',
  price: 29.99,
};

describe('CbProductSingle.vue', () => {
  it('renders product information correctly', () => {
    const { getByAltText, getByText } = render(CbProductSingle, {
      props: { product: mockProduct },
    });

    const image = getByAltText(mockProduct.product_name);
    expect(image).to.exist;
    expect(image.src).toBe(mockProduct.image);

    expect(getByText(mockProduct.product_name)).to.exist;

    expect(getByText('£29.99')).to.exist;
  });

  it('does not render anything if product is not provided', () => {
    const { container } = render(CbProductSingle, {
      props: { product: null },
    });

    expect(container).to.be.empty;
  });
});
