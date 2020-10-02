/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'dayjs/locale/fr';
import 'sanitize.css/sanitize.css';
import 'antd/dist/antd.less';
// Initialize languages
import './locales/i18n';

import { ConfigProvider } from 'antd';
import frFR from 'antd/es/locale/fr_FR';
// Import root app
import { App } from 'app';
import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import { configureAppStore } from 'store/configureStore';
import { history } from 'utils/history';

// Create redux store with history
const store = configureAppStore(history);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const firaSansObserver = new FontFaceObserver('Fira Sans', {});

// When Fira Sans is loaded, add a font-family using Open Sans to the body
firaSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

interface Props {
  Component: typeof App;
}
const ConnectedApp = ({ Component }: Props) => (
  <ConfigProvider locale={frFR}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <React.StrictMode>
            <Component />
          </React.StrictMode>
        </HelmetProvider>
      </ConnectedRouter>
    </Provider>
  </ConfigProvider>
);
const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app', './locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./app').App;
    render(App);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
