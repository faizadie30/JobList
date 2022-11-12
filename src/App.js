import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menus from './routes/Menus';

function App() {
  return (
    <>
      <Menus />
      <Routes />
    </>
  );
}

export default App;
