import axios from 'axios';
import { ActionTypes } from './actionTypes';


const CORS = 'https://cors.io/';

const DARK_SKY = 'https://api.darksky.net'; // https://darksky.net offer 1,000 free calls
const DARK_SKY_KEY = 'd6040132e8aabbf5359ca5fbdf1a6e3a';
const DARK_SKY_ADDITIONAL_QUERY_OPTIONS = 'exclude=hourly,flags&units=auto';
const WEATHER_API = ( latitude, longitude ) =>
	`${ DARK_SKY }/forecast/${ DARK_SKY_KEY }/${ latitude },${ longitude }?${ DARK_SKY_ADDITIONAL_QUERY_OPTIONS }`
;

export const weatherFetchStart = () => {
	return {
		type: ActionTypes.WEATHER_START
	};
};

export const weatherFetchUpdate = () => {
	return {
		type: ActionTypes.WEATHER_UPDATE
	};
};

export const weatherFetchError = error => {
	return {
		type: ActionTypes.WEATHER_ERROR,
		payload: error
	};
};

export const weatherFetchSuccess = weather => {
	return {
		type: ActionTypes.WEATHER_SUCCESS,
		payload: weather
	};
};

export const getWeatherFromApi = ( latitude, longitude, interval, update = false ) => {

	return ( dispatch ) => {

		if ( update ) {
			dispatch( weatherFetchUpdate() );
		} else {
			dispatch( weatherFetchStart() );
		}

		axios( {
			metod: "GET",
			url: `${ CORS }?${ WEATHER_API( latitude, longitude ) }`,
			dataType: 'json',
		} )
			.then( success => {
				dispatch( weatherFetchSuccess( success.data ) );
			}, interval() )
			.catch( error => {
				dispatch( weatherFetchError( error ) );
			} );
	};

};
