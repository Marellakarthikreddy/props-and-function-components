import React from 'react'
export default class StateExample extends React.Component {
    state={
        name:"react",
        age:123456
    }
  render() {
    return (
      <div>
        StateExample
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        </div>
    )
  }
}
