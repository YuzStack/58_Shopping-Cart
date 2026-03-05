import { Outlet } from 'react-router';
import Header from './Header';
import Logo from './Logo';
import Main from './Main';
import Nav from './Nav';
import UserProfile from './UserProfile';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = function (product, productId) {
    setCart(curCart => [...curCart, product]);

    setProducts(curProducts =>
      curProducts.map(product =>
        product.id === productId
          ? { ...product, isAddedToCart: true }
          : product,
      ),
    );
  };

  const handleRemoveFromCart = function (productId) {
    setCart(curCart => curCart.filter(product => product.id !== productId));

    setProducts(curProducts =>
      curProducts.map(product =>
        product.id === productId
          ? { ...product, isAddedToCart: false }
          : product,
      ),
    );
  };

  const handleIncreaseQuantity = function (productId) {
    setCart(curCart =>
      curCart.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );

    setProducts(curProducts =>
      curProducts.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const handleDecreaseQuantity = function (productId) {
    setCart(curCart =>
      curCart.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );

    setProducts(curProducts =>
      curProducts.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  };

  const handleChangeQuantity = function (productId, newQuantity) {
    setCart(curCart =>
      curCart.map(product =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );

    setProducts(curProducts =>
      curProducts.map(product =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );
  };

  return (
    <div>
      <Header>
        <Logo />
        <Nav cart={cart} />
        <UserProfile />
      </Header>

      <Main>
        <Outlet
          context={{
            products,
            setProducts,
            cart,
            handleAddToCart,
            handleRemoveFromCart,
            handleIncreaseQuantity,
            handleDecreaseQuantity,
            handleChangeQuantity,
          }}
        />
      </Main>
    </div>
  );
}

export default App;
