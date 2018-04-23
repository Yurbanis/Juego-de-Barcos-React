import React, { Component } from 'react';
import { shipTypes } from "../constants/constants";
import Hitpoints from "./Hitpoints";


class Flotilla extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          {
            shipTypes.map((ship, index) => {
              return(
                <div key={index}><img src={ship.icon} className="shipIcon" alt="shipIcon"/>
                  <Hitpoints hitPoints={5} hits={2}/>
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
