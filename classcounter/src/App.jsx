import React, { Component } from 'react'
import './App.css'
export default class App extends Component
{
  constructor()
  {
    super();
    this.state= {
      count:0
    }
  }
  render() {
    return (
      <div>
        <h1>This is simple class Component:{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>click me
        </button>
      </div>
    )
  }
}
