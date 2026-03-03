import { useState } from 'react';

function Product({ product }) {
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
    <li className='max-w-90 rounded-xl bg-white shadow-xl'>
      <div className=''>
        <img
          src={product.image}
          alt={product.title}
          loading='lazy'
          className='mx-auto h-50'
        />
      </div>
      <div className='px-4 py-6'>
        <p className='text-sm font-semibold tracking-wide text-neutral-400 uppercase'>
          {product.category}
        </p>
        <h3 className='my-1 truncate font-semibold'>{product.title}</h3>
        <div className='flex items-center justify-between'>
          <p className='text-lg font-bold tracking-wide'>${product.price}</p>
          <div className='text-sm text-neutral-600'>
            ⭐️ {product.rating.rate} ({product.rating.count})
          </div>
        </div>

        <div className='my-3 flex h-10 overflow-hidden rounded-full border border-gray-200'>
          <button
            onClick={handleDecreaseQuantity}
            className='h-full min-w-10 cursor-pointer border-r border-e-neutral-300 px-4 text-2xl text-neutral-400 transition-colors hover:text-black'
          >
            -
          </button>
          <input
            type='number'
            value={quantity}
            onChange={handleChangeQuantity}
            className='flex-1 [appearance:textfield] px-2 text-center focus:outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
          />
          <button
            onClick={handleIncreaseQuantity}
            className='h-full min-w-10 cursor-pointer border-l border-neutral-300 px-4 text-2xl text-neutral-400 transition-colors hover:text-black'
          >
            +
          </button>
        </div>

        <button className='bg-primary-accent w-full cursor-pointer rounded-xl p-2 text-white transition-all hover:scale-101 hover:bg-teal-400'>
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default Product;
