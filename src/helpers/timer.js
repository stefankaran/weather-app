import {
	HOUR_TEXT,
	MINUTE_TEXT,
	ONE_HOUR_TO_MINUTES
} from "../components/Weather/weather.consts";


export const timer = ( timer ) => {

	if ( timer < ONE_HOUR_TO_MINUTES ) {

		if ( timer === 0 ) {
			return `less than one ${ MINUTE_TEXT }`;
		}

		else if ( timer === 1 ) {
			return `${ timer } ${ MINUTE_TEXT }`;
		}

		else {
			return `${ timer } ${ MINUTE_TEXT }s`;
		}
	}

	else {
		const calcHours = Math.floor( timer / ONE_HOUR_TO_MINUTES );
		const calcMinutes = timer % ONE_HOUR_TO_MINUTES;

		const hours = calcHours > 1 ? `${ calcHours } ${ HOUR_TEXT }s` : `${ calcHours } ${ HOUR_TEXT }`;
		const minutes = calcMinutes !== 1 ? `and ${ calcMinutes } ${ MINUTE_TEXT }s` : `and ${ calcMinutes } ${ MINUTE_TEXT }`;

		if ( calcMinutes === 0 ) {
			return `${ hours }`;
		}

		else {
			return `${ hours } ${ minutes }`;
		}
	}
};
