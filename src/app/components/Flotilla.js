import React, { Component } from 'react';
import Hitpoints from "./Hitpoints";


class Flotilla extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let { flotilla } = this.props;
    return (
      <div>
        <div>
          {
            flotilla.map((ship, index) => {
              return (
                <div key={index}><img src={ship.icon} className="shipIcon" alt="shipIcon"/>
                  <Hitpoints hitPoints={ship.hitPoints - ship.hits} hits={ship.hits}/>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Flotilla;
