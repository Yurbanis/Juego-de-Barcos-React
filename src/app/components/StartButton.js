import React, { Component } from 'react'

export default (props) => {
  const { onClick, text } = props;
  return (
    <div className='text-center botones'>
      <div onClick={() => onClick()}>{text ? text : <h1>Comenzar Nuevo Juego</h1>}</div>
    </div>
  )
}
