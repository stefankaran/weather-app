import React from 'react';
import PropTypes from 'prop-types';

// Components
import WeatherCurrentlyDetailsItem from "./WeatherCurrentlyDetailsItem/WeatherCurrentlyDetailsItem";

// Style
import './WeatherCurrentlyDetails.scss';


const WeatherCurrentlyDetails = (
	{
		humidity,
		dewPoint,
		uvIndex,
		visibility
	}
) => {
	return (
		<section className='weather-currently-details'>
			<WeatherCurrentlyDetailsItem
				text='Humidity'
				num={ humidity }
			/>
			<WeatherCurrentlyDetailsItem
				text='Dew Pt.'
				num={ dewPoint }
				dot
			/>
			<WeatherCurrentlyDetailsItem
				text='UV Index'
				num={ uvIndex }
			/>
			<WeatherCurrentlyDetailsItem
				text='Visibility'
				num={ visibility }
			/>
		</section>
	);
};

export default WeatherCurrentlyDetails;

WeatherCurrentlyDetails.propTypes = {
	humidity: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number,
	] ),
	dewPoint: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number,
	] ),
	uvIndex: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number,
	] ),
	visibility: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number,
	] )
};
