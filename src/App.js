import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BonusSection from './components/BonusSection';

function App() {
  return (
    <div >
      <Navbar />
      <br />
      <Menu />
      <br />
      <BonusSection id="1" />
      <br />
      <About />
      <br />
      <BonusSection id="2" />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>

  );
}

export default App;
