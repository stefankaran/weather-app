export const weatherIcons = icon => {

	switch ( icon ) {
		case 'rain':
		case 'sleet':
		case 'hail':
			return 'rain';

		case 'cloudy':
		case 'partly-cloudy-day':
			return 'cloudy';

		case 'cloud':
		case 'partly-cloudy-night':
			return 'cloud';

		case 'snow':
			return 'snowing';

		case 'thunderstorm':
		case 'tornado':
			return 'storn';

		case 'clear-night':
			return 'moon';

		case 'clear-day':
			return 'sun';

		case 'fog':
			return 'fog';

		case 'wind':
			return 'wind';

		default:
			return 'sun';

	}

};
