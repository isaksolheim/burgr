import React from 'react';
import { Link } from 'react-scroll';

function Home() {
  return(
    <div className="parallax" id="home">
      <div className="slogan">
        THE ONLY BURGR IN TOWN
      </div>
      <div className="title">
        BURGR
      </div>
      <div className="button-wrapper">
      <Link 
          activeClass="active"
          to="menu"
          spy={true}
          smooth={true}
          offset={-10}
          duration={400}>
        <button type="button" className="nes-btn">
          SEE MENU
        </button>
      </Link>
      </div>
    </div>
  );
}

export default Home;