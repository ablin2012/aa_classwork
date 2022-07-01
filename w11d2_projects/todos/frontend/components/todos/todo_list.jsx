import React from "react";
import { TodoListItem } from "./todo_list_item";
import TodoForm from "./todo_form";
import { TodoDetailView } from "./todo_detail_view";

export class TodoList extends React.Component {
    constructor(props){
        super(props)
    }


    componentDidMount() {
        this.props.fetchTodos();
    }
    
    render() {
        return(
            <div>
                <TodoForm createTodo={this.props.createTodo} />
                <ul>
                    {this.props.todos.map((el,idx) => {
                        return (
                        <>
                            <TodoListItem todo={el} key={idx} removeTodo={this.props.removeTodo} receiveTodo={this.props.receiveTodo}/>
                            <TodoDetailView todo={el} key={idx}/>
                        </>
                        )
                    })}
                </ul>
            </div>
        )
    }
}