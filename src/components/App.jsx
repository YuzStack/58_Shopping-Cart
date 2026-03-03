import Header from './Header';
import Hero from './Hero';
import Logo from './Logo';
import Main from './Main';
import Nav from './Nav';
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
        <Shop>
          <Products />
        </Shop>
      </Main>
    </div>
  );
}

export default App;
