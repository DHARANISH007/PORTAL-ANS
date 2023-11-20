import React, { Component } from 'react'

export default class Propsclass extends Component {
   
    state={
        count:0,
    };
    handleIncrement=()=>{
        this.setState({count :this.state.count+1});
    }



  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onMouseOver={this.handleIncrement}>Increment</button>
        </div>
    );
  }
}
