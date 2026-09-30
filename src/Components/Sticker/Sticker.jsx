import { Component } from "react";
class Sticker extends Component{
    render() {
      const {img,label}=this.props.items
        return (
            <li>
                <img src={img} alt={label} onClick={() => this.props.onName(label)} />
          </li>
        );
}
}
export default Sticker