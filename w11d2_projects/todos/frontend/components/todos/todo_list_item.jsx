import React from "react";

export const TodoListItem = (props) => {
  let buttonText = props.todo.done ? "Done" : "Not Done"
  let buttonText2 = props.todo.detail ? "Hide Detail" : "Show Detail"


  const done = (e) => {
    e.preventDefault()
    const newProps = Object.assign({}, props) 

    if (props.todo.done === true) {
      newProps.todo.done = false 
      props.receiveTodo(newProps.todo)
    }
    else {
        newProps.todo.done = true;
        props.receiveTodo(newProps.todo)
    }
  }

  const remove = (e) => {
    e.preventDefault()
    props.removeTodo(props.todo)
  }



  const showDetail = (e) => {
    e.preventDefault()
    const props2 = Object.assign({}, props); 
    if (props2.todo.detail === true) {
      props2.todo.detail = false 
      props.receiveTodo(props2.todo)
    }
    else {
        props2.todo.detail = true;
        props.receiveTodo(props2.todo)
    }
  }


  return (
    <li>{props.todo.title} <button onClick={remove}>Delete</button> <button onClick={done}>{buttonText}</button> <button onClick={showDetail}>{buttonText2}</button></li>
  )
}
