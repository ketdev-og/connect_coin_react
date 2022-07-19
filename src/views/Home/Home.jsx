import React from "react";

import Top from '../../components/Top/Top';
import Actions from '../../components/Actions/Actions';
import Footer from '../../components/Footer/Footer';
import Event from '../../components/Event/Event';


const Home = () => {
  return (
    <>
        <Top/>
        <Actions/>
        <Event/>
        <Footer/>
    </>
  );
};

export default Home;
