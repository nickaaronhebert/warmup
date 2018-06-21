import React, { Component, Fragment } from 'react';
import {Row, Col} from 'antd';

export default class Home extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    
    return (
        <Row type="flex" justify="center" style={{marginTop: '100px'}}>
          <Col span={8} >
            <img style={{width: '100%'}} src='https://vivifyhealth-xmqfat98oo.netdna-ssl.com/wp-content/uploads/2016/02/Intermountain_Healthcare_2005_logo.svg.png?x24614'/>
          </Col>
        </Row>
    )
  }
}


