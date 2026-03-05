import { useOutletContext } from 'react-router';
import Products from './Products';

function Shop() {
  const {
    products,
    setProducts,
    handleAddToCart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleChangeQuantity,
  } = useOutletContext();

  return (
    <section className='container mx-auto h-[calc(100vh-64px)] px-4 py-6 lg:px-8 lg:py-12'>
      <h1 className='mb-2 text-3xl font-bold'>Shop All</h1>
      <p className='text-neutral-400'>
        Browse our collection of curated lifestyle essentials.
      </p>
      <Products
        products={products}
        setProducts={setProducts}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onChangeQuantity={handleChangeQuantity}
      />
    </section>
  );
}

export default Shop;
