import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
