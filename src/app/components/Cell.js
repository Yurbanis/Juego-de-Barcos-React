import React, { Component } from 'react';
import { cellStyle } from "../style";
import miss from './../../assets/img/Miss.png';
import hit from './../../assets/img/Hit.png';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let { cellState, onCellClick, x, y } = this.props;
    return (
      <div>
        <div onClick={() => onCellClick(x, y)} style={cellStyle}>
          {cellState === 'miss' && <img src={miss} className="miss" alt="miss" style={cellStyle}/>}
          {cellState === 'hitted' && <img src={hit} className="hit" alt="hit" style={cellStyle}/>}
        </div>
      </div>
    );
  }
}

export default Cell;
