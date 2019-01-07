import { ActionTypes } from './actionTypes';


const INITIAL_STATE = {
	isLoading: false,
	isUpdating: false,
	isError: false,
	data: null
};

const weatherReducer = ( state = INITIAL_STATE, action ) => {
	switch ( action.type ) {

		case ActionTypes.WEATHER_START:
			return {
				...state,
				isLoading: true,
			};

		case ActionTypes.WEATHER_UPDATE:
			return {
				...state,
				isUpdating: true,
			};

		case ActionTypes.WEATHER_ERROR:
			return {
				...state,
				isLoading: false,
				isUpdating: false,
				isError: true,
				data: action.payload.error
			};

		case ActionTypes.WEATHER_SUCCESS:
			return {
				...state,
				isLoading: false,
				isUpdating: false,
				isError: false,
				data: action.payload
			};

		default:
			return state;
	}

};

export default weatherReducer;
