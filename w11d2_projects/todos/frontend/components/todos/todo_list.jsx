import React from "react";
import { TodoListItem } from "./todo_list_item";
import TodoForm from "./todo_form";
import { TodoDetailView } from "./todo_detail_view";

export const TodoList = (props) => {
    return(
        <div>
            <TodoForm receiveTodo={props.receiveTodo} />
            <ul>
                {props.todos.map((el,idx) => {
                    return (
                    <>
                        <TodoListItem todo={el} key={idx} removeTodo={props.removeTodo} receiveTodo={props.receiveTodo}/>
                        <TodoDetailView todo={el} key={idx}/>
                    </>
                    )
                })}
            </ul>
        </div>
    )
}