import { Outlet } from 'react-router';
import Header from './Header';
import Logo from './Logo';
import Main from './Main';
import Nav from './Nav';
import UserProfile from './UserProfile';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const numCartItems = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  const handleAddToCart = function (product) {
    setCart(curCart => [...curCart, product]);
  };

  const handleRemoveFromCart = function (productId) {
    setCart(curCart => curCart.filter(product => product.id !== productId));
  };

  const handleIncreaseQuantity = function (productId) {
    setCart(curCart =>
      curCart.map(product =>
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
  };

  const handleChangeQuantity = function (productId, newQuantity) {
    setCart(curCart =>
      curCart.map(product =>
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
        <Nav numCartItems={numCartItems} />
        <UserProfile />
      </Header>

      <Main>
        <Outlet
          context={{
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
