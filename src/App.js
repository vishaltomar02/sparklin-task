import React from 'react';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
