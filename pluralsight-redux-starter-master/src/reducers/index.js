/**
 * Root reducer file
 * Basically this ties the reducers together.
 */

import {combineReducers} from 'redux';
//You can alias the reference because it is 'export default' in the class
import foods from './foodReducer';

const rootReducer = combineReducers({
    //The 'foods' refernece here is called a shorthand property name in ES6
    //Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
    foods
});

export default rootReducer;