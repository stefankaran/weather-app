import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const logger = createLogger({
	collapsed: true,
	diff: true
});

export default createStore(
	rootReducer,
	composeWithDevTools(
		/* logger must be the last middleware in chain to log actions */
		applyMiddleware(thunk, logger)
	)
);
