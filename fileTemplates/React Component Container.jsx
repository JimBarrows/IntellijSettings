import {PageHeader} from 'bootstrap-react-components';
import React from 'react';
import {connect} from 'react-redux';

class ${NAME} extends React.Component {

	render() {
		return (
				<div id={'${NAME}Component_' + this.props.id}>
					    <h1>${NAME}</h1>
				</div>
		);
	}
}

${NAME}.propTypes = {
 id: PropTypes.string.required
}

${NAME}.defaultProps={
}

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(${NAME});