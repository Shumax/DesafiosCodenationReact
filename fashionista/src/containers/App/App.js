import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Routes from '../../routes';
import Topbar from "../Topbar";

import './App.scss';

export default function App() {
  return (
    <Provider store={store}>
      <Topbar/>
      <Routes/>
    </Provider>
  );
}

