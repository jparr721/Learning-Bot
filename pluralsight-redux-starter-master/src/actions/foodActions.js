/**
 * This is our redux file to handle actions(obviously)
 *  
 * Actions are objects that return an object and REQUIRE 
 * a type property
 */
import * as types from './actionTypes';

export function createFood(food) {
    return { type: types.CREATE_FOOD, food };
}