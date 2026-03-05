import { ShoppingBag } from 'lucide-react';
import { NavLink } from 'react-router';

function Nav({ numCartItems }) {
  const styleNavLink = function ({ isActive }) {
    return `${isActive ? 'text-black' : ''} transition-colors hover:text-primary-accent`;
  };

  return (
    <nav className='z-50 flex items-center gap-6'>
      <button className='text-sm font-semibold tracking-wide text-neutral-500'>
        <NavLink to='/' className={styleNavLink}>
          Home
        </NavLink>
      </button>
      <button className='text-sm font-semibold tracking-wide text-neutral-500'>
        <NavLink to='/shop' className={styleNavLink}>
          Shop
        </NavLink>
      </button>
      <button className='relative text-sm font-semibold tracking-wide text-neutral-500'>
        <NavLink to='/cart' className={styleNavLink}>
          <ShoppingBag />
          <span className='bg-primary-accent absolute -top-[50%] left-[50%] flex h-6 w-6 items-center justify-center rounded-full text-white'>
            {numCartItems}
          </span>
        </NavLink>
      </button>
    </nav>
  );
}

export default Nav;
