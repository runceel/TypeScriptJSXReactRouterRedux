import * as counterReducers from './counterReducers';
import * as Redux from 'redux';
import * as ReactRouterRedux from 'react-router-redux';
import Counter from '../models/Counter';

export interface AppState {
    counter: Counter
}

export const reducer = Redux.combineReducers({
    counter: counterReducers.reducer,
    routing: ReactRouterRedux.routeReducer
});
