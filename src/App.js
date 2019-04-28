import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <br/>
      <Menu />
      <About />
      <Contact />
    </div>

  );
}

export default App;
