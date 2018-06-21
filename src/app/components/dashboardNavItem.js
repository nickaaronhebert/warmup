import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Switch, Route , Redirect} from 'react-router-dom';


export default class NavItem extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }


  render() {

    return (
        <div style={{width: '100%'}}>
          <div style={{textAlign: 'center'}}>
            <Icon type={this.props.icon} style={{fontSize: '24px', 'color': '#f6e3d2'}} onClick={() => {this.props.history.push(`${this.props.link}`) }}/>
          </div>
          <div style={{textAlign: 'center', 'color': '#f6e3d2', fontSize: '12px',}}>
            <span>{this.props.text}</span>

          </div>
        </div>
    )
  }
}