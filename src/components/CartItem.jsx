import { Trash2 } from 'lucide-react';
import { useState } from 'react';

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = function (e) {
    const value = Number(e.target.value);

    if (value < 1) return setQuantity(1);
    if (value > 99) return setQuantity(99);

    setQuantity(value);
  };

  const handleDecreaseQuantity = function () {
    if (quantity === 1) return;
    setQuantity(curQuantity => curQuantity - 1);
  };

  const handleIncreaseQuantity = function () {
    if (quantity === 99) return;
    setQuantity(curQuantity => curQuantity + 1);
  };

  return (
    <li className='flex items-center justify-between rounded-xl border border-[#DEE1E4] bg-white p-4 shadow-sm'>
      <div className='flex items-center gap-3'>
        <img
          src={item.image}
          alt={item.title}
          className='h-25 w-25 rounded-lg bg-neutral-300 p-2'
        />
        <div className='flex flex-col gap-0.5'>
          <span className='text-neutral-400'>{item.category}</span>
          <h3 className='max-w-70 truncate lg:max-w-100'>{item.title}</h3>
          <p className='font-semibold'>${item.price}</p>
          <span className='text-sm text-neutral-400'>
            ⭐️ {item.rating.rate} ({item.rating.count})
          </span>
        </div>
      </div>

      <div className='flex items-center gap-6'>
        <div className='flex h-8 w-30 overflow-hidden rounded-full border border-gray-200'>
          <button
            onClick={handleDecreaseQuantity}
            className='flex h-full min-w-5 flex-1 items-center justify-center border-r border-neutral-300 px-2 text-2xl text-neutral-400 transition-colors hover:text-black'
          >
            -
          </button>
          <input
            type='number'
            value={quantity}
            onChange={handleChangeQuantity}
            className='w-10 [appearance:textfield] px-2 text-center focus:outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
          />
          <button
            onClick={handleIncreaseQuantity}
            className='flex h-full min-w-5 flex-1 items-center justify-center border-l border-neutral-300 px-2 text-2xl text-neutral-400 transition-colors hover:text-black'
          >
            +
          </button>
        </div>
        <button className='text-neutral-400 transition-colors hover:text-neutral-600'>
          <Trash2 size={20} />
        </button>
      </div>
    </li>
  );
}

export default CartItem;
