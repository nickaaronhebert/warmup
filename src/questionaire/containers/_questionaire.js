import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import Questionaire from '../components/questionaire';
import Logic from '../../logic';

function mapStateToProps(state) {

  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questionaire));
