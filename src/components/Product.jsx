import { useState } from 'react';

function Product({ product, onAddToCart, onRemoveFromCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

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

  const handleAddToCart = function () {
    onAddToCart({ ...product, quantity });
    setIsAddedToCart(true);
  };

  const handleRemoveFromCart = function () {
    onRemoveFromCart(product.id);
    setIsAddedToCart(false);
  };

  return (
    <li className='max-w-90 rounded-xl bg-white shadow-xl'>
      <div>
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

        <div className='my-3 flex h-10 min-w-30 overflow-hidden rounded-full border border-gray-200'>
          <button
            onClick={handleDecreaseQuantity}
            className='h-full min-w-10 border-r border-neutral-300 px-4 text-2xl text-neutral-400 transition-colors hover:text-black'
          >
            -
          </button>
          <input
            type='number'
            value={quantity}
            onChange={handleChangeQuantity}
            className='w-full flex-1 [appearance:textfield] px-2 text-center focus:outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
          />
          <button
            onClick={handleIncreaseQuantity}
            className='h-full min-w-10 border-l border-neutral-300 px-4 text-2xl text-neutral-400 transition-colors hover:text-black'
          >
            +
          </button>
        </div>

        {isAddedToCart ? (
          <button
            onClick={handleRemoveFromCart}
            className='w-full rounded-xl border border-neutral-300 p-2 text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-600'
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className='bg-primary-accent border-primary-accent w-full rounded-xl border p-2 text-white transition-all hover:scale-101 hover:border-teal-400 hover:bg-teal-400'
          >
            Add to Cart
          </button>
        )}
      </div>
    </li>
  );
}

export default Product;
