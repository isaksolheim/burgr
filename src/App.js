import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <br/>
      <Menu />
      <br />
      <About />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>

  );
}

export default App;
