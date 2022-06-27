import React from "react";
import * as Minesweeper from "../minesweeper.js";

export default class Tile extends React.Component{
    constructor(props){
        super(props);
    }

    getValue() {
        const tile = this.props.tile;

        if(tile.explored){
            if(tile.bombed) {
                return "💣";
            }
            else {
                if(tile.adjacentBombCount() > 0) {
                    return tile.adjacentBombCount().toString();
                }
                else {
                    return " ";
                }
            }
        }
        else {
            if(tile.flagged){
                return "🇺🇸";
            }
            else {
                return " ";
            }
        }
    }

    handleClick(e){
        if (e.altKey) {
            this.props.updateGame(this.props.tile, true);
        } else {
            this.props.updateGame(this.props.tile, false);
        }
    }


    render(){
        const value = this.getValue();
        let revealed_string;

        if(this.props.tile.explored){
            revealed_string = "tile revealed";
        }
        else{
            revealed_string = "tile";
        }

        return(
            <div className={revealed_string} onClick={(e) => this.handleClick(e)}>{value}</div>
        )
    }
}