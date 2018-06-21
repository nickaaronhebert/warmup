import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import Page from '../components/page';

function mapStateToProps(state) {

  return {
  	
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export const PageContainer =  withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
