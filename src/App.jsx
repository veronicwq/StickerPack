import "./App.css";
import { Component } from "react";
import Choice from "./Components/Choice/Choice";
import StickerList from "./Components/SickerList/StickerList";
import sticker from "./stickers.json";
class App extends Component{
  state = {
    pockemonName: "",
  }
  handleClick=(text) => {
    this.setState(
      {
        pockemonName:text,
      }
    )
  }
  render() {
    return (
      <>
        <StickerList data={sticker} onName={ this.handleClick} />
        <Choice name={this.state.pockemonName} />
        
      </>
    )
  }
}
export default App