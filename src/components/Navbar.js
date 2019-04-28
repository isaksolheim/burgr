import React from 'react';

function Navbar() {
  return(
    <div className="navbar">
      <img src="logo.jpg" alt="logo" className="logo" />   
      <div className="nav-item">Home</div>
      <div className="nav-item">Menu</div>
      <div className="nav-item">About Burgr</div>
      <div className="nav-item">Contact Us</div>
    </div>
  );
}

export default Navbar;