import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Col, Grid, Navbar, Row } from 'react-bootstrap';
import '../assets/css/App.css';
import BattleField from "./components/BattleField.js";
import Flotilla from "./components/Flotilla";
import { shipTypes } from "./constants/constants";
import { getBattleField, makeClone } from './helpers/generateBattleField';
import maxHits from "./helpers/getMaxHits";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battleField: null,
      flotilia: null,
      shots: 0,
      hits: 0,
      maxHits: 0
    }
  }

  componentDidMount() {
    const maxHits = maxHits;
    this.setState({
      flotilia: shipTypes,
      maxHits: maxHits
    })
  }

  onClick() {
    let battleField = getBattleField();
    this.setState({
      battleField: battleField
    })
  }

  onCellClick(x, y) {
    let newBattleField = makeClone(this.state.battleField);
    console.log(`кликнул епте тут епте назхуй x=${x} y=${y}`);
    if (this.state.battleField[x][y] > 100) {
      console.log(`${x} ${y} попал епте = this.state.battleField[x][y]`);
      newBattleField[x][y] = 'hitted';
      this.setState({
        battleField: newBattleField
      })
    } else {
      newBattleField[x][y] = 'miss';
      this.setState({
        battleField: newBattleField
      })
    }
  }

  render() {
    let { battleField, maxHits } = this.state;
    console.log()
    return (
      <div className="main-content">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Battleships React Application
            </Navbar.Brand>
            <Navbar.Text>
              <button onClick={() => this.onClick()}>generate</button>
            </Navbar.Text>
            <Navbar.Text>
              <button onClick={() => this.setState({ battleField: null })}>Restart</button>
            </Navbar.Text>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row className="show-grid">
            <Col lg={4} lgOffset={2}>
              {maxHits}
              <Flotilla/>
            </Col>
            <Col lg={4}>
              <BattleField
                battleField={battleField}
                onClick={() => this.onClick()}
                onCellClick={(x, y) => this.onCellClick(x, y)}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
