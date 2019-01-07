import React from 'react';
import PropTypes from 'prop-types';

// Style
import './WeatherNextWeekDay.scss';


const WeatherNextWeekDay = (
	{
		icon,
		temperature,
		day,
	}
) => {
	return (
		<article className='weather-next-week-day'>
			<div className="weather-next-week-day__content">
				<div className={`weather-next-week-day__icon icon--${ icon }`} />
				<h3 className="weather-next-week-day__temperature">{ temperature }</h3>
				<h4 className="weather-next-week-day__day">{ day }</h4>
			</div>
			<div className="weather-next-week-day__gradient" />
		</article>
	);
};

export default WeatherNextWeekDay;

WeatherNextWeekDay.propTypes = {
	icon: PropTypes.string.isRequired,
	temperature: PropTypes.number.isRequired,
	day: PropTypes.string.isRequired,
};
