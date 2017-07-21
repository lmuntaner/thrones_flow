// @flow
import React, { Component } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';

import HouseListItem from '../HouseListItem';
import type State from '../../store';
import { addHouses } from '../../store/actions';
import type House from '../../models';

class HousesList extends Component {
  props: {
    addHouses: (houses: Array<House>) => any,
    houses: Array<House>,
  }

  defaultProps: {
    houses: [],
  }

  componentDidMount() {
    fetch('https://anapioficeandfire.com/api/houses?pageSize=20')
      .then(res => res.json())
      .then((houses: Array<House>): void => this.props.addHouses(houses))
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {
          this.props.houses.map((house: House) =>
            <HouseListItem key={ house.url } house={ house } />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  houses: Object.values(state.houses),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addHouses: (houses: Array<House>): void => dispatch(addHouses(houses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HousesList);
