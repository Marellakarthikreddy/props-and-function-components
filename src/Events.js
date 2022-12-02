
import React from "react"
export default class Events extends React.Component{
    State={
        username:"",
        demo:""
    }
    handleUser=()=>{
        console.log(this.state.username)
        this.setState({
            username:""
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
render(){
    return(
<div>
    <h1>Events</h1>
    <input type="text"  name="username" placeholder="username" onChange={this.handleChange}></input>
    <button onClick={this.handleUser}>Submit</button>
</div>

     )

}
}
