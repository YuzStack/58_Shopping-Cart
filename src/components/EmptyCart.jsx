function EmptyCart() {
  return (
    <p className='text-center font-semibold md:col-span-12'>
      Your cart is empty. Go to{' '}
      <button className='text-primary-accent'>Shop</button>.
    </p>
  );
}

export default EmptyCart;
