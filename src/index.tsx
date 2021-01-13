import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
  dracula: `${process.env.PUBLIC_URL}/dracula-theme.css`,
  monokai: `${process.env.PUBLIC_URL}/monokai-theme.css`,
  nord: `${process.env.PUBLIC_URL}/nord-theme.css`,
};

let curTheme = localStorage.getItem('curTheme') || '';
if (curTheme === '') {
  curTheme = 'light';
  localStorage.setItem('curTheme', curTheme);
}

document.title = 'Ant Theme Tester';
ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={curTheme}>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
