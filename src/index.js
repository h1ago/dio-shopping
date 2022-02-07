import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle } from 'styled-components'
import resetCss from 'styled-reset'
import App from './App';

const GlobalStyle = createGlobalStyle`
    ${resetCss};
  `

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
