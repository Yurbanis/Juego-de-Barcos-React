import React, { Component } from 'react'
import { grayText } from "../style/index";

export default (props) => {
  const { onClick, text } = props;
  return (
    <div className='text-center' style={grayText}>
      <span onClick={() => onClick()}>{text ? text : 'Start new game'}</span>
    </div>
  )
}
