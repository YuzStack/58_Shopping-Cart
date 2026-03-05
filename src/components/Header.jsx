function Header({ children }) {
  return (
    <header className='sticky top-0 h-16 bg-white shadow-md'>
      <div className='container mx-auto flex h-full items-center justify-between px-4 lg:px-8'>
        {children}
      </div>
    </header>
  );
}

export default Header;
