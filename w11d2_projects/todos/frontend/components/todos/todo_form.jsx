import React from "react";

class TodoForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        id: Math.floor(Math.random() * 10000000),
        title: "",
        body: "",
        done: false,
        detail: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.updateBody = this.updateBody.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.props.receiveTodo(this.state)
    this.setState({
      id: Math.floor(Math.random() * 10000000),
      title: "",
      body: "",
      done: false,
      detail: false
    })
  }

  updateTitle(e) {
    this.setState({title: e.target.value})    
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  render(){
      return(
        <form onSubmit={this.handleSubmit}>
            <label>Title
                <input type="text" value={this.state.title} onChange={this.updateTitle} />
            </label>
            <label>Body
                <input type="text" value={this.state.body} onChange={this.updateBody} />
            </label>
            <input type="submit" value="Create New Todo!"/>
        </form>
      )
  }
}

export default TodoForm;