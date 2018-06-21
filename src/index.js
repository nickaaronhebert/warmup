import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './base/base-store';
import { history } from './base/base-store';
import RoutesComponent  from './base/base-routes';
import { Router } from 'react-router-dom';
import './app/style/app.scss';

ReactDOM.render(
    <Provider store={store}>
    	<Router history={history}>
        	<RoutesComponent/>
    	</Router>
	</Provider>,
    document.getElementById('root'),
);
