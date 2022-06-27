import React from "react";
import DogDetail from "./DogDetail";

class DogIndex extends React.Component {
    constructor(props) {
        super(props); //gives us access to 'this' inside constructor

        this.state = { //Local State
            totalVotes: 0
        };
        this.addVote = this.addVote.bind(this);
    }

    addVote(){
        this.setState({totalVotes: this.state.totalVotes + 1});
    }

    render(){
        const breeds = (
            "Samoyed",
            "Doberman",
            "Corgi",
            "Husky",
            "German Shepard",
            "Chihuahua",
            "Labrador Retriever",
            "Golden Retriever"
        )

        // const breedElements = breeds.map( breed => <li key = {breed} onClick={this.addVote}> {breed} </li>);
        const breedElements = breeds.map( breed => <DogDetail key = {breed} addVote={this.addVote} breed={breed}/>);

        return(
            <div className="dog-index">
                <h1>Total Dog Votes: {this.state.totalVotes}</h1>
                <ul>
                    {breeds.map((breed) => {
                        return (
                            <li key={breed} onClick={this.addVote}>{breed}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}