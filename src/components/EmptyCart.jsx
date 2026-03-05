import { Link } from 'react-router';

function EmptyCart() {
  return (
    <p className='text-center font-semibold md:col-span-12'>
      Your cart is empty. Go to{' '}
      <button className='text-primary-accent'>
        <Link to='/shop'>Shop</Link>
      </button>
      .
    </p>
  );
}

export default EmptyCart;
