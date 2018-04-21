import React, { Component } from 'react';
import '../assets/css/App.css';
import { getBattleField } from './helpers/battleship';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battleField: null
    }
  }

  onClick() {
    let battleField = getBattleField();
    this.setState({
      battleField: battleField
    })
  }

  render() {
    let { battleField } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>BattleField</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={() => this.onClick()}>generate</button>
        </div>
        <h1>BATTLESHIP</h1>
        {battleField &&
        <table>
          <tbody>
          {battleField.map((row, index) => {
            return (
              <tr key={index}>{row.map((column, index) => {
                return (
                  <td key={index} className='tableCell'>{column}</td>
                )
              })}</tr>
            )
          })}
          </tbody>
        </table>
        }
      </div>
    );
  }
}

export default App;
