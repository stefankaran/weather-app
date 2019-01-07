import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { weatherIcons } from '../../../helpers/weatherIcons';
import { timer } from "../../../helpers/timer";

// Components
import Chart from '../../Chart/Chart';

// Style
import './WeatherCurrently.scss';


const WeatherCurrently = (
	{
		temperature,
		summary,
		icon,
		currentCityData,
		getWeatherFromApi,
		isWeatherUpdating,
		updateTimer,
		updateTimerReload
	}
) => {
	const rotateIconClass = isWeatherUpdating ? 'rotate' : '';
	const timerText =
		!isWeatherUpdating ?
			<p>{ [ 'Updated ', <span key='timer_text'>{ timer( updateTimer ) }</span>, ' ago' ] }</p> :
			'Updating...'
	;

	const buttonHandler = () => getWeatherFromApi( currentCityData.latitude, currentCityData.longitude, updateTimerReload, true );

	return (
		<article className='weather-currently'>
			<Chart />
			<header className='weather-currently__header'>
				<div className='weather-currently__details'>
					<div className='weather-currently__temperature'>{ temperature }</div>
					<h3 className='weather-currently__summary'>{ summary }</h3>
				</div>
				<div className={ `weather-currently__icon icon--${ weatherIcons( icon )  }` } />
			</header>
			<footer className='weather-currently__footer'>
				<button
					className={ `weather-currently__refresh icon--refresh ${ rotateIconClass }` }
					onClick={ () => buttonHandler() }
					disabled={ isWeatherUpdating }
				/>
				{ timerText }
			</footer>
		</article>
	);
};

export default WeatherCurrently;

WeatherCurrently.propTypes = {
	temperature: PropTypes.number,
	summary: PropTypes.string,
	icon: PropTypes.string,
	currentCityData: PropTypes.object,
	getWeatherFromApi: PropTypes.func,
	isWeatherUpdating: PropTypes.bool,
	updateTimer: PropTypes.number,
	updateTimerReload: PropTypes.func,
};
