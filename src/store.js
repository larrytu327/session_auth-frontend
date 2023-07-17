import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [...middleware],
    enhancers: [composeWithDevTools()]
});

export default store;