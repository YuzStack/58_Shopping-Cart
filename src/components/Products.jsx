import { useLoaderData } from 'react-router';
import Product from './Product';

function Products({
  products,
  setProducts,
  onAddToCart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onChangeQuantity,
}) {
  if (products.length === 0) {
    /* eslint-disable */
    const data = useLoaderData();
    setProducts(
      data.map(datum => ({ ...datum, quantity: 1, isAddedToCart: false })),
    );
  }

  return (
    <ul className='mt-6 grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onChangeQuantity={onChangeQuantity}
        />
      ))}
    </ul>
  );
}

export default Products;
