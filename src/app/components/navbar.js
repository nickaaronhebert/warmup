import React, { Component, Fragment } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button } from 'antd';
import { Switch, Route , Redirect} from 'react-router-dom';
import matchPath from "react-router/matchPath";

const { Header, Content, Footer, Sider } = Layout;

const menu = (
  <Menu>
    {/*
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">My Profile</a>
    </Menu.Item>
    */}
    <Menu.Item>
      <a rel="noopener noreferrer" href="/logout">Logout</a>
    </Menu.Item>
  </Menu>
);

export default class Navbar extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  handleMenuClick(e) {
    switch (e.key) {
      case 'vendor-dashboard':
        this.props.navigateToRoute({ to: '/vendor/dashboard', replace: true})
        break;
      case 'organization-dashboard':
        this.props.navigateToRoute({ to: '/organization/dashboard', replace: true})
        break;
      case 'dash-admin-dashboard':
        this.props.navigateToRoute({ to: '/dash/dashboard', replace: true})
        break;
      case 'dashboard':
        var dashboard = this.props.session.user.role.indexOf('vendor') > -1 ? '/vendor/dashboard' : '/organization/dashboard';
        this.props.navigateToRoute({ to: dashboard, replace: true})
        break;
      case 'settings':
        var settings = this.props.session.user.role.indexOf('vendor') > -1 ? '/vendor/settings' : '/organization/settings';
        this.props.navigateToRoute({ to: settings, replace: true})
        break;
      case 'logout':
        this.props.navigateToRoute({ to: '/logout', replace: true})
        break;
      case 'login':
        this.props.navigateToRoute({ to: '/login', replace: true})
        break;
      default: 
        break;
    }
  }

  getCurrentMenuKey() {
    if (this.props.router.parameters == null) {
      return [];
    }
    if (this.props.router.parameters.path == '/organization/dashboard') {
      return ['dashboard']; 
    }
    else if (this.props.router.parameters.path == '/organization/settings') {
      return ['settings']
    }
    else {
      return [];
    }
  }

  render() {
    const getMenu = () => {
      var menuKeys = [];
      switch(this.props.role) {
        case 'vendorAdmin':
          menuKeys.push(<Menu.Item key="vendor-dashboard">My Dashboard</Menu.Item>)
          break;
        case 'organizationAdmin':
          menuKeys.push(<Menu.Item key="organization-dashboard">My Dashboard</Menu.Item>, <Menu.Item key="settings">Settings</Menu.Item>)
          break;
        case 'public':
          menuKeys.push(<Menu.Item key="login">Login</Menu.Item>)
          break;
        case 'superAdmin':
          menuKeys.push(<Menu.Item key="dash-admin-dashboard">Admin Dashboard</Menu.Item>,<Menu.Item key="organization-dashboard">Organization Dashboard</Menu.Item>,<Menu.Item key="vendor-dashboard">Vendor Dashboard</Menu.Item> )
          break;
      }
      return (
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={this.getCurrentMenuKey()}
          style={{ lineHeight: '60px', 'padding': '0px'}}
          onClick={(e) => this.handleMenuClick(e)}
        >
          {menuKeys}
        </Menu>
      )
    }
    const publicMenu = () => {
      return (
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[]}
          style={{lineHeight: '60px', 'padding': '0px'}}
          onClick={(e) => this.handleMenuClick(e)}
        >

          {/* Other Navbar Menu Items
          <Menu.Item key="solutions">Our Solutions</Menu.Item>
          <Menu.Item key="pricing">Pricing</Menu.Item>
          */}
          

        </Menu>
      )
    }
    return (
      <Header className="header" style={{backgroundColor: '#FFFFFF'}}>
        <Row>
          <Col span={3} style={{height: '62px', borderBottom: '1px solid #e8e8e8'}}>
            <div className="logo" style={{height: '62px'}}>
              <img src='https://www.dashsdk.com/cloud-assets/img/logos/dash-logo-grey.png' style={{"width":"90px",height:"35px",marginBottom: '10px'}}/>
            </div>
          </Col>
          {this.props.session.authenticated ? 
          
          <Fragment>  
            <Col span={18}>
              {getMenu()}
              
            </Col>
            <Col span={3} style={{height: '62px', borderBottom: '1px solid #e8e8e8'}}>
              <div align="right">
                {/* <Icon type="bell" style={{fontSize: '20px', paddingRight: '20px'}}/> */}
                {/*user*/}
                <Dropdown overlay={menu}>
                  <Icon type="logout" style={{fontSize: '20px',  paddingRight: '20px'}}/>
                </Dropdown>
              </div>
            </Col>
          </Fragment>
          :
          <Col span={21}>
            {getMenu()}
          </Col>
        }
        </Row>
        
        
      </Header>

          
    )
  }
}