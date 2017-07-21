// @flow
import React from 'react';

import type House from '../../models';

// type House = {
//   +url: string,
//   +name: string,
//   +region: string,
// };

// console.log(House);

type Props = {
  house: House,
};

// Does not complain that House doesn't have a title property when importing the type
const HouseListItem = ({ house }: Props) =>
  <p>{ house.title }</p>;

export default HouseListItem;
