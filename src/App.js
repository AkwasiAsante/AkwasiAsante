import React from 'react';
import { Navbar, Modal, Feature } from './components';
import {
  About,
  Contact,
  Footer,
  Header,
  Portfolio,
  Services,
  Skills,
} from './container';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
