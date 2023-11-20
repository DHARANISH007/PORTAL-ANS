import React, { Component } from 'react'
import EnComponent from './Encomponent'

 class HoverCounter extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.inc}  >Click me {this.props.count}  </button>
      </div>
    )
  }
}

export default  EnComponent(HoverCounter)