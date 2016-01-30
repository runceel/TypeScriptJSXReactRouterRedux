import Counter from '../models/Counter';
import * as constants from '../commons/constants';
import * as counterActions from '../actions/counterActions';
import * as ReactRouterRedux from 'react-router-redux';
import {Action} from '../commons/actions';
import assign = require('object-assign');

export function reducer(state = new Counter(), action: Action): Counter {
    switch (action.type) {
        case constants.INCREMENT:
        case constants.DECREMENT:
            return changeCounterValue(state, action as counterActions.CounterAction);
        default:
            return state;
    }
}

function changeCounterValue(state: Counter, action: counterActions.CounterAction): Counter {
    switch (action.type) {
        case constants.INCREMENT:
            return assign({},
                state, {
                    count: state.count + action.amount
                } as Counter);
        case constants.DECREMENT:
            return assign({},
                state, {
                    count: state.count - action.amount
                } as Counter);
        default:
            return state;
    }
}
