import React, { Component, Fragment } from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export default class Question extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      activeStage: null,
      errors: [],
      showErrors: false,
      submittable: false
    }
  }

  componentDidMount() {
    if (this.props.autoStep) {
      setTimeout(() =>  { this.props.callback()}, this.props.delay);
    }
  }
  

  render() {
    
    return (
      <div style={{textAlign: 'center'}} key={this.props.order}>
        {
          this.props.headerText && 
          <div style={{marginBottom: '100px'}}>
            <p style={{'fontSize': '18px'}}>{this.props.headerText} </p>
          </div>

        }
        {
          this.props.questionImage
        }
        <div style={{display: 'inline-block', margin: '0px 5px', width: '70%'}}>
          {this.props.input} 
        </div>
        <br/>
        {
          this.props.autoStep && 
            <Spin indicator={antIcon} />

        }
      </div>
    )
  }
}




