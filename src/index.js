import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import Weather from "./components/Weather/Weather";

// Style
import './index.scss';


const App = () => (
	<div className="App">
		<Weather />
	</div>
);

const rootElement = document.getElementById( "root" );

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	rootElement
);
