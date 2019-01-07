import React from 'react';

import './Loader.scss';


const Loader = () => {

	const renderCubes = () => {
		const cubes = [];
		let i = 1;

		for ( i; i <= 9; i++ ) {
			cubes.push( <div key={ i } className={ `LoaderCube LoaderCube${ i }` } /> );
		}

		return cubes;
	};

	return <div className='LoaderGrid'> { renderCubes() } </div>;
};

export default Loader;
