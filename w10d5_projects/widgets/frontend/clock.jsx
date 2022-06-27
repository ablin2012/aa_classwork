import React from "react"

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
        this.tick = this.tick.bind(this);
    }  

    tick(){
        this.setState({ date: new Date() });
    }

    componentDidMount(){
       this.intervalId =  setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return(
            <div className="clock">
                <h1>Clock</h1>
                <ul>
                    <li>Hours: {this.state.date.getHours()}</li>
                    <li>Minutes: {this.state.date.getMinutes()}</li>
                    <li>Seconds: {this.state.date.getSeconds()}</li>
                </ul>
            </div>
        )
    }
}

export default Clock;