import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Route from '../components/Route';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const RoutePage = (props) => {
  const nick = props.match.params.nick;
  console.log(nick);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Função para extrair as informações
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Route />
      <Footer />
    </>
  );
};

export default RoutePage;
