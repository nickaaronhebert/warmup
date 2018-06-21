import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ConnectedRouter, Router } from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { sessionService } from 'redux-react-session';
import RouteWrapper from './base-routes-wrapper';
import * as pages from '../app/pages';

class Routes extends Component {
	constructor(props, context) {
		super(props);

		this.state = {
			
		}
	}

	render() {
			const { session } = this.props;
			return (
			<div style={{height: '100%'}}>
				<Switch>
					<RouteWrapper 
						exact 
						path='/questionaire'
						component={pages.Questionaire}
					/>
					<Route>
						<span>Not Found</span>
					</Route>
				</Switch>

			</div>
		)
		
	}
}

function mapStateToProps(state) {
  return {
		session: state.session,
		isReady: state.session.user.id
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));