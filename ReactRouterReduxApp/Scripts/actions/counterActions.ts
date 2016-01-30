import {Action} from '../commons/actions';
import * as constants from '../commons/constants';

export interface CounterAction extends Action {
    amount: number;
}

export function increment(amount: number): CounterAction {
    return {
        type: constants.INCREMENT,
        amount: amount
    };
}

export function decrement(amount: number): CounterAction {
    return {
        type: constants.DECREMENT,
        amount: amount
    };
}
