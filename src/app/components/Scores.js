import React, { Component } from 'react'
import { grayText, scoreHits, scoreItem, scorePanel, scoreShots } from "../style";
import { scoreText } from "../style/index";

export default (props) => {
  const { hits, shots } = props;
  return (
    <div className='text-center' style={scorePanel}>
      <div style={scoreHits}>
        <h2 style={grayText}>{hits}</h2>
        <hr/>
        <p style={scoreText}>Hits</p>
      </div>
      <div style={scoreShots}>
        <h2 style={grayText}>{shots}</h2>
        <hr/>
        <p style={scoreText}>Shots</p>
      </div>
    </div>
  )
}
