import React from "react"
class ClassComponent3 extends React.Component{
    render()
    {
        console.log(this.props)
    return(
        <div>
        <p>name:{this.props.framework}</p>
        <p>year:{this.props.year}</p>
        </div>
    )
}
}
export default ClassComponent3