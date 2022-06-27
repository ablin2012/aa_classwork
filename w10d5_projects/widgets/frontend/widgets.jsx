import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock"
import Tabs from "./tabs"
import Weather from "./weather"

const movies = [
    {title: "Spiderman", content: "He saves NYC"},
    {title: "The Lion King", content: "simba got hes revange"},
    {title: "finding nemo", content: "nemo found"}
]

function App(){
    return(
         <div>
              <Clock/>
              <Tabs movies={movies}/>
              <Weather/>
         </div>
    )

}

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById('root');

    ReactDOM.render(<App />, root);
})