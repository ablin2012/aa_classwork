import React from "react";

class Tabs extends React.Component {
    constructor(props){
        super(props);
      
        this.state = {
            selected: 0
        }
    }
        
    selectTab(num){
        this.setState({ selected: num})
    }

    render(){
        const movies = this.props.movies;
        const content = movies[this.state.selected].content
        return(
            <ul className="tabs">

                {movies.map((movie, idx) => {
                    return(
                        <li>
                            <header onClick={() => this.selectTab(idx)}>
                                <h1>{movie.title}</h1>
                            </header>
                        </li>  
                    )
                })}
                <article>{content}</article>
            </ul>
        )
    }
}

export default Tabs;