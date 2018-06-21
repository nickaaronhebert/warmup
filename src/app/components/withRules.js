import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import Logic from '../../logic';

const { getCurrentResponse } = Logic.assessments.selectors;

export default function(WrappedComponent) {
	class WithRules extends React.Component {
		passesRules() {
			if (this.props.rules.length == 0) {
				return true;
			}
			else {
				var passed = true;
				this.props.rules.map((rule) => {
					const answeredQuestion = this.props.answers.find(x => x.question == rule.questionId);
					if (!answeredQuestion) { 
						passed = false;
					}
					else if (answeredQuestion.value != rule.value) { 
						passed = false;
					}
				})
			}
			return passed;
		}
		render() {
			if (this.passesRules()) {
				return <WrappedComponent {...this.props} />
			}
			else {
				return null;
			}
		}
	}

	function mapStateToProps(state) {
		const response = getCurrentResponse(state, 'assessmentResponse');
		const answers = response.answers;
	  return {
	  	answers
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return bindActionCreators({

	  }, dispatch);
	}

	return withRouter(connect(mapStateToProps, mapDispatchToProps)(WithRules));

};