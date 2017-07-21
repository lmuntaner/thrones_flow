// @flow
import { combineReducers, createStore } from 'redux'

import type Action from './actions';
import { ADD_HOUSES } from './actions';
import type House from '../models';

type HousesState = {
  +[string]: House,
};

export type State = {
  +houses: HousesState,
};

const houses = (state: HousesState = {}, action: Action): HousesState => {
  switch (action.type) {
    case ADD_HOUSES: {
      const newState = { ...state };
      action.houses.forEach(house => {
        newState[house.url] = house;
      });

      return newState;
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  houses,
});

export default createStore(reducer);
