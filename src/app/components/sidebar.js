import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown } from 'antd';
import { Switch, Route , Redirect} from 'react-router-dom';
import NavItem from './dashboardNavItem';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const navItems = [
  {
    text: "Dashboard",
    link: "/dashboard",
    icon: "dashboard"
  },
  {
    text: "Inspections",
    link: "/inspections",
    icon: "home"
  },
  {
    text: "Clients",
    link: "/clients",
    icon: "user"
  },
  {
    text: "Buildings",
    link: "/buildings",
    icon: "bank"
  },
  {
    text: "Meters",
    link: "/meters",
    icon: "pie-chart"
  },
  {
    text: "Utility Accounts",
    link: "/utility",
    icon: "file-text"
  },
  {
    text: "Settings",
    link: "/settings",
    icon: "setting"
  },
  {
    text: "Help",
    link: "/help",
    icon: "question-circle"
  }

] 

export default class Sidebar extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
          <Sider style={{ minHeight: '100%', 'backgroundColor':'#0788B9' }} width={80} >
            <div style={{ paddingTop: '80px'}}>
              {
                navItems.map((navItem) => {
                  return (
                    <div style={{marginBottom: '20px'}} className='navItemClickable'>
                      <NavItem text={navItem.text} link={navItem.link} icon={navItem.icon} history={this.props.history} />
                    </div> 
                  )
                })
              }  
            </div>
          </Sider>
    )
  }
}