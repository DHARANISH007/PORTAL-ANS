import React, { Component } from 'react'

export default class SpreadPassigUnknow extends Component {
  render() {
    const{title1, ...restValue}=this.props;
    return (
      <div>
        <h1>my name {title1}</h1>
        <input {...restValue}></input>
      </div>
    )
  }
}
