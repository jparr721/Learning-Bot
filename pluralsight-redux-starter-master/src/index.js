import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router'; //browserHistory gives us clean URLs
import routes from './routes';
import './styles/styles.css'; //Webpack will import our CSS for us
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/**
 * This render is what hosts our entire application.
 * It is basically the entry point of the application
 */

//For this, when we get to server rendering passing 'iniital state' is a tool we'll use. Look it up...
const store = configureStore();
render(
  //Provider wraps the application so that way it can be connected to our Redux store
  <Provider store={store}>
   <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
