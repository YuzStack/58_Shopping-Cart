import Header from './Header';
import Hero from './Hero';
import Logo from './Logo';
import Main from './Main';
import Nav from './Nav';
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
        <Hero />
      </Main>
    </div>
  );
}

export default App;
