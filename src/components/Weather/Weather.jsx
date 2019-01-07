import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { find as _find } from 'lodash';

// Components
import Loader from "../General/Loader/Loader";
import Error from "../General/Error/Error";
import WeatherCurrently from "./WeatherCurrently/WeatherCurrently";
import WeatherCurrentlyDetails from "./WeatherCurrentlyDetails/WeatherCurrentlyDetails";
import WeatherNextWeek from "./WeatherNextWeek/WeatherNextWeek";

// Actions
import { getWeatherFromApi } from './actions';

// Style
import './Weather.scss';

// Consts
import {
	CITIES,
	ONE_MINUTE_TO_MILLISECONDS,
} from "./weather.consts";


const UPDATE_TIMER_START = 0;


@connect( state => {
	return {
		weatherReducer: state.weatherReducer
	};
}, dispatch => bindActionCreators( {
	getWeatherFromApi
}, dispatch ) )
class Weather extends React.Component {
	state = {
		currentCityId: 'bg',
		updateTimer: UPDATE_TIMER_START
	};

	componentDidMount() {
		this.props.getWeatherFromApi(
			this.currentCityData().latitude,
			this.currentCityData().longitude,
			this.updateTimerReload,
		);
	}

	componentWillUnmount() {
		clearInterval( this.updateTimerInterval );
	}

	// Find current city data from static const file
	currentCityData = () => _find( CITIES, { id: this.state.currentCityId } );

	// Set state with new city ID
	currentCityStateHandler = currentCityId => this.setState( { currentCityId } );

	// Refresh data: Set interval
	updateTimerSetInterval = () => this.updateTimerInterval = setInterval( () => this.updateTimerHandlerState(), ONE_MINUTE_TO_MILLISECONDS );

	// Refresh data: Counting state
	updateTimerHandlerState = () => {
		this.setState( prevState => ( {
			updateTimer: prevState.updateTimer + 1
		} ) );
	};

	// Refresh data: Clear interval and counting state, and set new interval
	updateTimerReload = () => {
		if ( this.updateTimerInterval ) {
			clearInterval( this.updateTimerInterval );
		}
		this.setState( {
			updateTimer: UPDATE_TIMER_START
		}, () => this.updateTimerSetInterval() );
	};

	render() {
		const {
			currentCityId,
			updateTimer
		} = this.state;
		const {
			weatherReducer,
			getWeatherFromApi
		} = this.props;

		// Loader view
		if (
			weatherReducer.isLoading ||
			( !weatherReducer.data && !weatherReducer.isError )
		) {
			return <section className='weather weather--full-width'><Loader /></section>;
		}

		// Error view
		if ( weatherReducer.isError ) {
			return <section className='weather weather--full-width'><Error /></section>;
		}

		const weatherCurrentlyData = weatherReducer.data.currently;
		const weatherNextWeekData = weatherReducer.data.daily.data;

		return (
			<section className='weather'>
				<WeatherCurrently
					temperature={ Math.round( weatherCurrentlyData.temperature ) }
					summary={ weatherCurrentlyData.summary }
					icon={ weatherCurrentlyData.icon }
					currentCityData={ this.currentCityData() }
					getWeatherFromApi={ getWeatherFromApi }
					isWeatherUpdating={ weatherReducer.isUpdating }
					updateTimer={ updateTimer }
					updateTimerReload={ this.updateTimerReload }
				/>

				<WeatherCurrentlyDetails
					humidity={ `${ weatherCurrentlyData.humidity * 100 }%` }
					dewPoint={ weatherCurrentlyData.dewPoint }
					uvIndex={ `${ weatherCurrentlyData.uvIndex }/10` }
					visibility={ `${ weatherCurrentlyData.visibility } km` }
				/>

				<WeatherNextWeek
					currentCityData={ this.currentCityData() }
					getWeatherFromApi={ getWeatherFromApi }
					currentCityStateHandler={ this.currentCityStateHandler }
					currentCityId={ currentCityId }
					weatherNextWeekData={ weatherNextWeekData }
					updateTimerReload={ this.updateTimerReload }
				/>
			</section>
		);
	}
}

export default Weather;
