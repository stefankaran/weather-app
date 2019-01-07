function monthAsString( monthIndex ) {
	let month = [];

	month[ 0 ] = "January";
	month[ 1 ] = "February";
	month[ 2 ] = "March";
	month[ 3 ] = "April";
	month[ 4 ] = "May";
	month[ 5 ] = "June";
	month[ 6 ] = "July";
	month[ 7 ] = "August";
	month[ 8 ] = "September";
	month[ 9 ] = "October";
	month[ 10 ] = "November";
	month[ 11 ] = "December";

	return month[ monthIndex ];
}

function dayAsString( dayIndex ) {
	let weekdays = [];

	weekdays[ 0 ] = "Sunday";
	weekdays[ 1 ] = "Monday";
	weekdays[ 2 ] = "Tuesday";
	weekdays[ 3 ] = "Wednesday";
	weekdays[ 4 ] = "Thursday";
	weekdays[ 5 ] = "Friday";
	weekdays[ 6 ] = "Saturday";

	return weekdays[ dayIndex ];
}

export const getDays = ( startDate, daysToAdd ) => {
	let daysArr = [];
	let i = 0;

	for ( i; i <= daysToAdd; i++ ) {
		let currentDate = new Date();

		currentDate.setDate( startDate.getDate() + i );

		daysArr.push(
			dayAsString( currentDate.getDay() )
		);
	}

	return daysArr;
};

export const currentDate = () => {
	let currentDate = new Date();

	const getDate = currentDate.getDate();
	const dateNum = getDate <= 9 ? `0${ getDate }` : getDate;

	return `${ dateNum } ${ monthAsString( currentDate.getMonth() ) }`;
};

