import React from 'react';
import PropTypes from 'prop-types'

export default class ${NAME} extends React.Component {

	render() {
		return (
				<div id={'${NAME}Component_' + this.props.id}>
					    <h1>${NAME}</h1>
				</div>
		);
	}
}

${NAME}.propTypes = {
  id: PropTypes.string.isRequired
}

${NAME}.defaultProps={
}