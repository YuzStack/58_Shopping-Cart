import { useEffect, useState } from 'react';
import CartItem from './CartItem';

function CartItems() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      const cartItems = data.filter((_, idx) => idx <= 2);
      setCartItems(cartItems);
    }

    fetchProducts();
  }, []);

  return (
    <ul className='flex flex-col gap-4 lg:col-span-9'>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default CartItems;
