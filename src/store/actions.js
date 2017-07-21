export type Action = {
  +type: string,
};

export const ADD_HOUSES = 'addHouses';

// Does not complain about House...
export const addHouses = (houses: Array<House>): Action => ({
  type: ADD_HOUSES,
  houses,
});
