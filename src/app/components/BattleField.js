import React, { Component } from 'react';
import { cellStyle } from "../style";
import Cell from "./Cell";

class BattleField extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let { battleField, onCellClick, onClick, buttonState } = this.props;
    return (
      <div>
        {battleField ?
          <table className='battlefieldTable'>
            <tbody>
            {battleField.map((row, x) => {
              return (
                <tr key={x}>{row.map((column, y) => {
                  return (
                    <td
                      key={y}
                      className='tableCell'

                    >
                      <Cell
                        onCellClick={() => onCellClick(x, y)}
                        x={x}
                        y={y}
                        cellState={column}
                      />
                    </td>
                  )
                })}</tr>
              )
            })}
            </tbody>
          </table>
          :
          <table className='emptyBattleField'>
            <tbody>
            <tr>
              <td className='emptyBattleField' style={{ width: '300px', height: '300px' }}>
                <div className='text-center'>
                  <span onClick={() => onClick()}>Start new game</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        }
      </div>
    );
  }
}

export default BattleField;
