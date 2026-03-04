import { ShoppingBag } from 'lucide-react';

function Nav() {
  return (
    <nav className='z-50 flex items-center gap-6'>
      <button className='text-sm font-semibold tracking-wide text-neutral-500'>
        Home
      </button>
      <button className='text-sm font-semibold tracking-wide text-neutral-500'>
        Shop
      </button>
      <button className='relative text-sm font-semibold tracking-wide text-neutral-500'>
        <ShoppingBag size={24} />
        <span className='bg-primary-accent absolute -top-[50%] left-[50%] flex h-6 w-6 items-center justify-center rounded-full text-white'>
          5
        </span>
      </button>
    </nav>
  );
}

export default Nav;
