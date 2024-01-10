import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Flotilla from './../components/Flotilla';
import Scores from "./../components/Scores";

export default (props) => {
  const { flotilla, hits, shots } = props;
  return (
    <Col md={3}>
      <Row>
        <div className='scoresPanel'>
          <Col md={12}>
            <Scores hits={hits} shots={shots}/>
          </Col>
          <Col md={12}>
            <Flotilla flotilla={flotilla}/>
          </Col>
        </div>
      </Row>
    </Col>
  )
}
