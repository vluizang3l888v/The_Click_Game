import React, { Component } from 'react';
import ClickyBoxes from '../clicky-boxes'

import Colors from '../../colors.json'

import './GameSpace.css';

class GameSpace extends Component {
  // STATE GOES HERE
  state = {
    boxColors: [],
    alreadyClicked: []
  }

  // METHODS GO HERE
  componentDidMount() {
    this.setState({
      boxColors: Colors
    });
  }

  // JSX GOES HERE
  render() {
    return (
      <div className='game-space-container'>
        {
          this.state.boxColors.map(box => {
            return(
              <ClickyBoxes
                key={box.id}
                id={box.id}
                color={box.color}/>
            )
          })
        }
      </div>
    );
  }
}

export default GameSpace;
