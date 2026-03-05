import { useOutletContext } from 'react-router';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import EmptyCart from './EmptyCart';

function Cart() {
  const {
    cart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleChangeQuantity,
  } = useOutletContext();

  return (
    <section className='container mx-auto h-[calc(100vh-64px)] px-4 py-6 lg:px-8 lg:py-12'>
      <h1 className='mb-6 text-3xl font-bold lg:mb-10'>Your Cart</h1>
      <div className='grid gap-6 lg:grid-cols-12'>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartItems
              cart={cart}
              onRemoveFromCart={handleRemoveFromCart}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onChangeQuantity={handleChangeQuantity}
            />
            <OrderSummary cart={cart} />
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
