import React from "react";

export const TodoDetailView = (props) => {
    let newProps = Object.values(props.todo)
    if (props.todo.detail === true) { 
        return (
            <ul>
                {newProps.map(detail => {
                    return (
                        <li>{detail}</li>
                    )
                })}
            </ul>
            )
      }
}