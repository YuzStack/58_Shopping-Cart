function OrderSummary() {
  return (
    <div className='rounded-lg border border-[#DEE1E4] bg-white p-4 shadow-lg md:p-6 lg:col-span-3'>
      <h2 className='mb-4 text-xl font-semibold'>Order Summary</h2>

      <div className='space-y-2 border-b border-neutral-300 pb-4'>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-neutral-400 lg:text-base'>
            Subtotal
          </span>
          <span className=''>$323.97</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-neutral-400 lg:text-base'>
            Shipping
          </span>
          <span className=''>Free</span>
        </div>
      </div>

      <div className='my-4 flex items-center justify-between'>
        <span className='text-base font-semibold lg:text-lg'>Total</span>
        <span className='text-base font-semibold lg:text-lg'>$323.97</span>
      </div>

      <button className='bg-primary-accent mb-2 w-full rounded-lg p-2 text-white transition-all hover:scale-101 hover:bg-teal-400'>
        Proceed to Checkout
      </button>
      <button className='w-full rounded-lg p-2 text-sm text-neutral-400 transition-colors hover:text-neutral-700'>
        Continue Shopping
      </button>
    </div>
  );
}

export default OrderSummary;
