import { useEffect, useState } from 'react';
import Product from './Product';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <ul className='mt-6 grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default Products;
