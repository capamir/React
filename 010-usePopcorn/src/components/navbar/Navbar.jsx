import React from "react";

function Navbar({ element }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {element}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

export default Navbar;
