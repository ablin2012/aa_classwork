import React from "react";

export const TodoDetailView = (props) => {
    let newProps = Object.values(props.todo)
    newProps = newProps.filter(detail => typeof detail !== "boolean");
    if (props.todo.detail === true) { 
        return (
            <ul>
                {newProps.map((detail) => {
                    return (
                        <li>{detail}</li>
                    )
                })}
            </ul>
            )
      }
}