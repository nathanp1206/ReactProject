import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from "@chakra-ui/core";

let root = document.getElementById('root')

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
  root.setAttribute("class", "root")
);

serviceWorker.unregister();
