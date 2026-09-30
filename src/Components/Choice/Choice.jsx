import { Component } from "react";
class Choice extends Component{
    render() {
        return (
            <p>{this.props.name||"Nemae dannih"}</p>
        )
    }
}
export default Choice