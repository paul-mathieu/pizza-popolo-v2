import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ButtonAppBar from './components/navBar';
import UseScripts from './components/useScript';

import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/simple-line-icons.min.css';
import './assets/css/smoothproducts.css';

ReactDOM.render(
  <React.StrictMode>
    <ButtonAppBar/>
    <App />
    <UseScripts/>
  </React.StrictMode>,
  document.getElementsByTagName('body').item(0)
);

