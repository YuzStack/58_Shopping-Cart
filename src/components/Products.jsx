import { useEffect } from 'react';
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
  useEffect(
    function () {
      async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(
          data.map(datum => ({ ...datum, quantity: 1, isAddedToCart: false })),
        );
      }

      products.length === 0 && fetchProducts();
    },
    [products, setProducts],
  );

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
