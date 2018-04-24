import React, { Component } from 'react';
import { cellStyle } from '../style';
import hit from './../../assets/img/Hit.png';
import miss from './../../assets/img/Miss.png';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onClick(x, y, cellState) {
    if (cellState !== 'miss' && cellState !== 'hitted') {
      this.props.onCellClick(x, y);
    }
  }

  render() {
    let { cellState, onCellClick, x, y } = this.props;
    return (
      <div>
        <div onClick={() => this.onClick(x, y, cellState)} style={cellStyle}>
          {cellState === 'miss' && <img src={miss} className='miss' alt='miss' style={cellStyle}/>}
          {cellState === 'hitted' && <img src={hit} className='hit' alt='hit' style={cellStyle}/>}
        </div>
      </div>
    );
  }
}

export default Cell;
