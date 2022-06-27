import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Tile from "./tile.jsx";

export default class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
            
        }
    }

    render(){
        console.log(this.props.board);

        return(
            <div className="board">
                {this.props.board.grid.map((row, i) => {
                    return(
                        <div className="row" key={i.toString()}>
                            {row.map((tile, j) => {
                                return(
                                    <Tile key={j.toString()} tile={tile} updateGame={this.props.updateGame}/>
                                )
                            })
                        }
                        </div>
                    )
                })}
            </div>
        )
    }

    
}