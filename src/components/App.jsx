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

  return (
    <div>
      <Header>
        <Logo />
        <Nav numCartItems={numCartItems} />
        <UserProfile />
      </Header>

      <Main>
        <Outlet context={{ cart, handleAddToCart, handleRemoveFromCart }} />
      </Main>
    </div>
  );
}

export default App;
