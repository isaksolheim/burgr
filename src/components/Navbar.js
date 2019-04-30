import React from 'react';
import { Link } from 'react-scroll';

class Navbar extends React.Component {
  dropdown = () => {
    var navbar = document.getElementById('navbar');
    if (navbar.className === 'navbar') {
      console.log('ere');
      navbar.className += ' responsive';
    } else {
      navbar.className = 'navbar';
    }
  }

  render() {
    return(
      <div className="navbar" id="navbar">
        <img src="logo.jpg" alt="logo" className="nav-logo" />
        <button onClick={this.dropdown}><i className="fa fa-bars"/>click</button>
        <Link 
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-10}
          duration={400}>
            <div className="nav-item">Home</div>
        </Link>
        <Link 
          activeClass="active"
          to="menu"
          spy={true}
          smooth={true}
          offset={-10}
          duration={400}>
            <div className="nav-item">Menu</div>
        </Link>
        <Link 
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={400}>
            <div className="nav-item">About</div>
        </Link>
        <Link 
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-10}
          duration={400}>
            <div className="nav-item">Contact Us</div>
        </Link>
        <div className="nav-button">
        </div>
      </div>
    );
  }
}

export default Navbar;