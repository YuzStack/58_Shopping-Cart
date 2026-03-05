import Cart from './Cart';
import CartItems from './CartItems';
import EmptyCart from './EmptyCart';
import Header from './Header';
import Hero from './Hero';
import Logo from './Logo';
import Main from './Main';
import Nav from './Nav';
import OrderSummary from './OrderSummary';
import Products from './Products';
import Shop from './Shop';
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <Nav />
        <UserProfile />
      </Header>

      <Main>
        {/* <Hero /> */}

        {/* <Shop>
          <Products />
        </Shop> */}

        {/* <Cart>
          <CartItems />
          <OrderSummary />
          <EmptyCart />
        </Cart> */}
      </Main>
    </div>
  );
}

export default App;
