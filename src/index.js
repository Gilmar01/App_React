import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import AppRoutes from './routes';
const GlobalStyle = createGlobalStyle`
* {
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Roboto Condensed', sans-serif;
}
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
