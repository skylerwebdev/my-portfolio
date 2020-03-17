
import React from 'react';
import { Switch as S, Route as R } from 'react-router-dom';
import Home from '../pages/user/Home';
import Portfolio from '../pages/user/Portfolio';
import Tos from '../pages/user/Tos';
import PrivPol from '../pages/user/PrivPol';
import Contact from '../pages/user/Contact';
import Freelance from '../pages/user/Freelance';

const AppRouter = () => {
  return (
    <S>
      <R exact path='/' component={Home} />
      <R path='/portfolio' component={Portfolio} />
      <R path='/freelance' component={Freelance} />
      <R path='/contact' component={Contact} />
      <R path='/tos' component={Tos} />
      <R path='/privpol' component={PrivPol} />
portfolio
    </S>
  );
};
export default AppRouter;

