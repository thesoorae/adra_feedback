import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.getState = store.getState;
  window.store = store;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Main />, root)
});