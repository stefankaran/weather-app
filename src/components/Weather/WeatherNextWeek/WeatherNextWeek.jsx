import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { currentDate } from '../../../helpers/dates';

// Components
import WeatherNextWeekDays from "./WeatherNextWeekDays/WeatherNextWeekDays";

// Style
import './WeatherNextWeek.scss';

// Consts
import { CITIES } from "../weather.consts";


const WeatherNextWeek = (
	{
		currentCityData,
		currentCityId,
		getWeatherFromApi,
		currentCityStateHandler,
		weatherNextWeekData,
		updateTimerReload
	}
) => {

	const buttonHandler = ( cityId, latitude, longitude ) => {
		currentCityStateHandler( cityId );
		getWeatherFromApi( latitude, longitude, updateTimerReload );
	};

	const renderCities = CITIES.map( city => {
			if ( city.id === currentCityData.id ) {
				return null;
			}

			return (
				<button
					key={ city.id }
					className="weather-next-week__city"
					onClick={ () => buttonHandler( city.id, city.latitude, city.longitude ) }
				>
					{ city.name }
				</button>
			);
		}
	);

	return (
		<article
			className='weather-next-week'
			style={ { backgroundImage: `url( /images/${ currentCityId }.jpg )` } }
		>

			<div className="weather-next-week__cities">
				<div className="weather-next-week__city-current">{ currentCityData.name }</div>
				<div className="weather-next-week__city-list">{ renderCities }</div>
				<span className="weather-next-week__arrow icon--angle-down" />
			</div>

			<p className="weather-next-week__current-date">{ currentDate() }</p>

			<WeatherNextWeekDays weatherNextWeekData={ weatherNextWeekData } />
		</article>
	);
};

export default WeatherNextWeek;

WeatherNextWeek.propTypes = {
	currentCityData: PropTypes.object,
	currentCityId: PropTypes.string,
	getWeatherFromApi: PropTypes.func,
	currentCityStateHandler: PropTypes.func,
	weatherNextWeekData: PropTypes.array,
	updateTimerReload: PropTypes.func,
};
