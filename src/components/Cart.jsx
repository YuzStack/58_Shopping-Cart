import CartItems from './CartItems';
import OrderSummary from './OrderSummary';

function Cart() {
  return (
    <section className='container mx-auto h-[calc(100vh-64px)] px-4 py-6 lg:px-8 lg:py-12'>
      <h1 className='mb-6 text-3xl font-bold lg:mb-10'>Your Cart</h1>
      <div className='grid gap-6 md:grid-cols-12'>
        <CartItems />
        <OrderSummary />
      </div>
    </section>
  );
}

export default Cart;
