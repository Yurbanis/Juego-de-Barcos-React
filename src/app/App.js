import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';
import '../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
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
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Battleships React Application
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row className='row'>
            <Col lg={6}>
              <p className='App-intro'>
                Press button below to start.
              </p>
              <div>
                <button onClick={() => this.onClick()}>generate</button>
              </div>
            </Col>
            <Col lg={6}>
              {battleField &&
              <table className='battlefieldTable'>
                <tbody>
                {battleField.map((row, index) => {
                  return (
                    <tr key={index}>{row.map((column, index) => {
                      return (
                        <td key={index} className='tableCell'>{column >= 100 && 'x'}</td>
                      )
                    })}</tr>
                  )
                })}
                </tbody>
              </table>
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
