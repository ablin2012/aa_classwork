import React from "react"

class Weather extends React.Component{
    constructor(props){
        super(props);

    }  
   
    render(){
        return(
            <div class="weather">
            <h1>Weather</h1>
            <p>loading...</p>
            </div>
        )
    }
}

export default Weather;