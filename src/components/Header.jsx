function Header({ children }) {
  return (
    <header className='sticky top-0 flex h-16 items-center justify-around shadow-lg'>
      {children}
    </header>
  );
}

export default Header;
