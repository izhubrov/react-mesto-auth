import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';

//Чтобы осуществлялась перезагрузка страницы в gh-pages нужно вместо browserrouter поставить hashrouter и адрес будет с #
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.querySelector('.root')
);
