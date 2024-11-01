import React from 'react';
import './index.css';
import RoutesProvider from './routes/RoutesProvider';
import HeaderHome from './components/headerHome/HeaderHome';
import FooterHome from './components/footerHome/FooterHome';

const App = () => {
  return (
    <>
      <HeaderHome />
      <RoutesProvider />
      <FooterHome />
    </>
  );
};

export default App;

