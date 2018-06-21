import React, { Component, Fragment } from 'react';
import { Switch, Route , Redirect} from 'react-router-dom';
import { message, Button, Layout } from 'antd';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Home from './home';


const { Header, Content, Footer, Sider } = Layout;

export default class Page extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  renderLayout() {
    switch(this.props.layout) {
      case 'sidebar': 
        return <Sidebar/>
        break;
      case 'navbar':
        return <Navbar />
      default: 
        return <Home/>;

    }
  }

  render() {
  	return (
  		<Layout style={{ height: '100%', 'backgroundColor':'white' }}>
        <Navbar session={this.props.sessionStore} role={this.props.role} logout={this.props.logout} navigateToRoute={this.props.navigateToRoute} router={this.props.router}/>
        <Content style={{ backgroundColor: 'white', height : '100%' }}>
          {this.props.children}
        </Content>
      </Layout>
  	)
  }
}


