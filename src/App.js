import React from 'react';
import './App.css';
import Navigation from './components/navbar';
import JumbotronWeb from './components/jumbotron';
import Contact from './components/contact';
import Motto from './components/motto';
import Products from './components/products';
import About from './components/aboutus';


function App() {
  return (
    <div style={{justifyContent:'center'}}>     
      <Navigation/>
      <JumbotronWeb/>
      <About/>
      <Products/>
      <Motto/>
      <Contact/>
    </div>
  );
}

export default App;
