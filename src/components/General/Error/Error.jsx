import React from 'react';
import PropTypes from 'prop-types';

// Style
import './Error.scss';


const Error = (
	{
		message,
		buttonText
	}
) => {
	return (
		<div className='error'>
			<h2 className="error__message">{ message }</h2>
			<button
				className="error__button"
				onClick={ () => window.location.reload() }
			>
				{ buttonText }
			</button>
		</div>
	);
};

export default Error;

Error.propTypes = {
	message: PropTypes.string,
	buttonText: PropTypes.string,
};

Error.defaultProps = {
	message: 'Something went wrong.',
	buttonText: 'Reload the page',
};
