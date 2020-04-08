import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/Main';
import ResponsiveMenu from './components/responsiveMenu/ResponsiveMenu';
import BackBody from './components/backBody/BackBody';
function App() {
  return (
    <>
      <BackBody/>
      <ResponsiveMenu />
      <Main />
    </>
  );
}

export default App;
