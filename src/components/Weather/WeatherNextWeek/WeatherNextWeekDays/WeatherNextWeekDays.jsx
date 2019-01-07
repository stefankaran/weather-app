import React from 'react';
import PropTypes from 'prop-types';

// Helper
import { getDays } from "../../../../helpers/dates";
import { weatherIcons } from '../../../../helpers/weatherIcons';

// Components
import WeatherNextWeekDay from "./WeatherNextWeekDay/WeatherNextWeekDay";

// Style
import './WeatherNextWeekDays.scss';

// Consts
let startDate = new Date();
let nextSevenDays = getDays( startDate, 7 );


const WeatherNextWeekDays = ( { weatherNextWeekData } ) => {

	const renderNextWeekDays = weatherNextWeekData.map( ( day, i ) => {
		if ( i > 0 && i <= 7 ) {
			return (
				<WeatherNextWeekDay
					key={ i }
					icon={ weatherIcons( day.icon ) }
					temperature={ Math.round( day.temperatureHigh ) }
					day={ nextSevenDays[ i ].substring( 0, 3 ) }
				/>
			);
		}

		return null;
	} );

	return (
		<section className='weather-next-week-days'>
			<div className="weather-next-week-days__blur-wrapper">
				<div className="weather-next-week-days__blur" />
			</div>
			{ renderNextWeekDays }
		</section>
	);
};

export default WeatherNextWeekDays;

WeatherNextWeekDays.propTypes = {
	weatherNextWeekData: PropTypes.array,
};
