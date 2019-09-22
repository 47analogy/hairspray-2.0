import React, { Component } from 'react'

export default class Welcome extends Component {
  render () {
    return (
      <div className='welcome'>
        <img
          className='pic'
          src='https://pacific-basin-16363.herokuapp.com/images/hairspray2.png'
          alt='hairspray logo'
        />
      </div>
    )
  }
}
