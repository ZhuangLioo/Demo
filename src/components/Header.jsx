function Header({ className = "" }) {
  return (
    <header className={className}>
      <h1 style={{ margin: 0, fontSize: "1.25rem" }}>Welcome to Our Website</h1>
    </header>
  );
}

export default Header;
