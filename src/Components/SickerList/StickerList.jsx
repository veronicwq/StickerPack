import { Component } from "react";
import Sticker from "../Sticker/Sticker";
class StickerList extends Component{
    render() {
        const{data,onName}=this.props
        return (
            <ul>{data.map((item) => {
                return (
                    <Sticker key={item.label} items={item} onName={onName} />
                )
            })}</ul>
        )
    }
}
export default StickerList