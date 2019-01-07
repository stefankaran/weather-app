import React from 'react';
import PropTypes from 'prop-types';

// Style
import './WeatherCurrentlyDetailsItem.scss';


const WeatherCurrentlyDetailsItem = (
	{
		num,
		text,
		dot
	}
) => {

	const dotClass = dot ? 'dot' : '';

	return (
		<article className='weather-currently-details-item'>
			<p className={`weather-currently-details-item__num ${ dotClass }`}>{ num }</p>
			<p className="weather-currently-details-item__text">{ text }</p>
		</article>
	);
};

export default WeatherCurrentlyDetailsItem;

WeatherCurrentlyDetailsItem.propTypes = {
	num: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	dot: PropTypes.bool
};
