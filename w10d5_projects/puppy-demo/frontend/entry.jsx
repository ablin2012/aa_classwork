import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    // const hello = <h1>Hello from React</h1>;

    ReactDOM.render(<App name="Peter" />, root) //two args: WHAT, and WHERE
    // All components must be capitalized, React vs HTML
})