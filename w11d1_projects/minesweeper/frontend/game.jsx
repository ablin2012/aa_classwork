import React from "react";
import * as Minesweeper from "../minesweeper.js";
import Board from "./board.jsx"
import EndScreen from "./end_screen.jsx"

export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(24, 72)
        };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, boolean){
        if (boolean) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({ board: this.state.board });
    }

    render(){
        let msg = "";
        let display = {display: "block"};
        if(this.state.board.won()) {
            msg = "You Won!";
        }
        else if (this.state.board.lost()) {
            msg = "You Lost!"
        }
        else {
            display = {display: "none"};
        }

        
        return (
            <div>
                <Board board={this.state.board} updateGame={this.updateGame}/>
                <EndScreen message={msg} display={display}/> 
            </div>
        )
    }

    
}