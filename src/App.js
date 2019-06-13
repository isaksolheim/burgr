import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BonusSection from './components/BonusSection';

function App() {
  return (
    <div className="content">
      <Navbar />
      <Menu />
      <div className="main-container">
        <img id="img1" width="100%" src="http://www.burgr.no/wp-content/uploads/2018/03/28741153_1709890542382542_1926205011_n.jpg" alt="burger" />
        <BonusSection id="1" />
        <img id="img2" width="100%" src="http://www.burgr.no/wp-content/uploads/2018/03/28811018_1709851409053122_990895645_o.jpg" alt="inside" />
        <About />
        <img id="img3" src="http://www.burgr.no/wp-content/uploads/2018/03/28721820_1709869545717975_1364282438_n.jpg" alt="gaming" />
        <BonusSection id="2" />
        <Contact />
      </div>
      <br />
      <Footer />
    </div>

  );
}

export default App;
