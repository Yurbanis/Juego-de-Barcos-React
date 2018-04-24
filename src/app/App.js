import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash'
import React, { Component } from 'react';
import { Col, Grid, Navbar, Row } from 'react-bootstrap';
import '../assets/css/App.css';
import BattleField from './components/BattleField.js';
import Flotilla from './components/Flotilla';
import Scores from "./components/Scores";
import { shipTypes } from './constants/constants';
import { getBattleField, makeClone } from './helpers/generateBattleField';
import { getMaxHits } from './helpers/getMaxHits';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battleField: null,
      flotilla: null,
      shots: 0,
      hits: 0,
      maxHits: 0
    }
  }

  componentWillMount() {
    const maxHits = getMaxHits();
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      flotilla: newFlotilla,
      maxHits: maxHits
    });
    console.log(window.innerHeight)
  }

  onClick() {
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      battleField: getBattleField(),
      hits: 0,
      shots: 0,
      flotilla: newFlotilla
    })
  }

  resetGame() {
    let newFlotilla = _.cloneDeep(shipTypes);
    this.setState({
      battleField: null,
      hits: 0,
      shots: 0,
      flotilla: newFlotilla
    })
  }

  onCellClick(x, y) {
    let newBattleField = makeClone(this.state.battleField);
    let shot = this.state.shots + 1;
    let hits = this.state.hits;
    let newFlotilla = [...this.state.flotilla];
    let cellValue = this.state.battleField[x][y];
    if (cellValue >= 100) {
      switch (cellValue) {
        case 100:
          newFlotilla[0].hits = newFlotilla[0].hits + 1;
          break;
        case 200:
          newFlotilla[1].hits = newFlotilla[1].hits + 1;
          break;
        case 300:
          newFlotilla[2].hits = newFlotilla[2].hits + 1;
          break;
        case 400:
          newFlotilla[3].hits = newFlotilla[3].hits + 1;
          break;
        case 500:
          newFlotilla[4].hits = newFlotilla[4].hits + 1;
          break;
      }
      newBattleField[x][y] = 'hitted';
      hits += 1;
      this.setState({
        battleField: newBattleField,
        hits: hits,
        shots: shot,
        flotilla: newFlotilla
      })
    } else {
      newBattleField[x][y] = 'miss';
      this.setState({
        battleField: newBattleField,
        shots: shot
      })
    }
  }

  render() {
    let { battleField, flotilla, hits, shots } = this.state;
    console.log(`this.state = ${JSON.stringify(flotilla[0].hits)}`);
    console.log(`this.state = ${JSON.stringify(flotilla[1].hits)}`);
    console.log(`this.state = ${JSON.stringify(flotilla[2].hits)}`);
    console.log(`this.state = ${JSON.stringify(flotilla[3].hits)}`);
    console.log(`this.state = ${JSON.stringify(flotilla[4].hits)}`);
    return (
      <div className='main-content'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Battleships React Application
            </Navbar.Brand>
          </Navbar.Header>
          <div onClick={() => this.resetGame()}>Reset game</div>
        </Navbar>
        <Grid>
          <Row className='show-grid'>
            <Col lg={3} lgOffset={2}>
              <Scores hits={hits} shots={shots}/>
              <Flotilla flotilla={flotilla}/>
            </Col>
            <Col lg={4}>
              <div className='text-center'>
                <BattleField
                  hits={hits}
                  battleField={battleField}
                  onClick={() => this.onClick()}
                  onCellClick={(x, y) => this.onCellClick(x, y)}/>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
