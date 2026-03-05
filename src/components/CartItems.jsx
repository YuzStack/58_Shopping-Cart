import CartItem from './CartItem';

function CartItems({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onChangeQuantity,
}) {
  return (
    <ul className='flex flex-col gap-4 lg:col-span-9'>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemoveFromCart={onRemoveFromCart}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          onChangeQuantity={onChangeQuantity}
        />
      ))}
    </ul>
  );
}

export default CartItems;
