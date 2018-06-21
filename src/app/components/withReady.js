import React from "react";

export default function(WrappedComponent) {
	class WithReady extends React.Component {
		render() {
			if (this.props.isReady) {
				return <WrappedComponent {...this.props} />
			}
			else {
				return null;
			}
		}
	}
	return WithReady;
};