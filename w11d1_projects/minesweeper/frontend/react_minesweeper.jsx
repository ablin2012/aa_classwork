import React from "react";
import ReactDOM from "react-dom";
import Game from "./game";
import Tile from "./tile"

function App(){
    return(
         <div className="everything">
            <h1> Minesweeper</h1>
            {/* <section>
            <p> Click to explore a tile</p>
            <p> Alt-click to flag a tile</p>
            </section> */}
             <Game />
         </div>
    )

}

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById('root');

    ReactDOM.render(<App />, root);
})