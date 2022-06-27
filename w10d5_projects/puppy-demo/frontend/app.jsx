import React from "react";
import DogIndex from "./DogIndex";

const App = (props) => {
    return (
        <div className="app">
            <h1>Hello to {props.name} from the App</h1>
            <h2>Popular Dogs:</h2>
            <DogIndex />
        </div>
    )
}

export default App;