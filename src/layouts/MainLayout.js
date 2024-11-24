import React from 'react';
import '../styles/global.css';
const MainLayout = ({ children }) => {
  return (
    <div>
      <header>Navbar</header>
      <main className="main-layout">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
