import React from "react";


const EndScreen = ({message, display}) => (
    <div className="end-screen" style={display}>
        {message}
        <button>Restart Game</button>
    </div>
)

export default EndScreen;

