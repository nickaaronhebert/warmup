import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter, Router } from 'react-router-redux';


const containers = {

}

export default class BaseAuthenticatedRoutes extends Component {
	constructor(props, context) {
		super(props);

		this.state = {

		}
	}

	render() {
		return (
			<Fragment>
				{
					this.props.authenticated ? 
						<Fragment>
							
						</Fragment>
					:
						<Redirect to='/'/>
				}
			</Fragment>
		)
	}
}