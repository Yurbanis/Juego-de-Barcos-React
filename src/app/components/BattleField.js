import React, { Component } from 'react';
import Cell from "./Cell";
import StartButton from "./StartButton";

class BattleField extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let { battleField, hits, onCellClick, onClick, buttonState } = this.props;
    return (
      <div>
        {battleField && hits < 17 &&
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
        }
        {hits === 17 &&
        <table className='emptyBattleField'>
          <tbody>
          <tr>
            <td className='emptyBattleField' style={{ width: '300px', height: '300px' }}>
              <div className='text-center'>
                <h1>Game over</h1>
                <StartButton onClick={() => onClick()}/>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        }
        {!battleField &&
        <table className='emptyBattleField'>
          <tbody>
          <tr>
            <td className='emptyBattleField' style={{ width: '300px', height: '300px' }}>
              <StartButton onClick={() => onClick()}/>
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
