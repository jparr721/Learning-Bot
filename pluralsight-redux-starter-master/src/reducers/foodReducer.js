/**
 * Reducer for adding food
 * 
 * Reducers take the current state, and the
 * action being applied to the state, and then
 * returns a new state with the given action
 * performed but it will only run the code IF the
 * action applies to it. Otherwise the code will hit
 * the reducer but nothing will happen if it does
 * not pertain to a specific reducer.
 */

import * as types from '../actions/actionTypes';

export default function foodReducer(state =[], action) {
    switch(action.type) {
        case types.CREATE_FOOD:
            //Spread operator to return the whole state object (...)
            //In this case is 'spreads' stuff out and returns the
            //whole state array
            return [...state,
                Object.assign({}, action.food)
                ];

        default:
            return state;
    }
}