import React, { Component, Fragment } from 'react';
import {Row, Col} from 'antd';
import { PageContainer } from '../containers/_page';
import QuestionaireContainer from '../../questionaire/containers/_questionaire';

export default class ResetPassword extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    
    return (
      <QuestionaireContainer/>
    )
  }
}


