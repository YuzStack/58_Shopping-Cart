import CartItem from './CartItem';

function CartItems({ cart }) {
  return (
    <ul className='flex flex-col gap-4 lg:col-span-9'>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default CartItems;
