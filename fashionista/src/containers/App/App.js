import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Topbar from '../../components/Topbar';
import store from '../../store';
//import ProdutoList from './ProdutoList';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Topbar></Topbar>
      </Provider>
    );
  }
}

export default App;
