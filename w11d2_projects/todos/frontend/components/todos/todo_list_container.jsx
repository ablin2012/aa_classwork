import { connect } from "react-redux";
import {TodoList} from "./todo_list"
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, fetchTodos, createTodo, removeTodo, receiveTodos, receiveTodo} from '../../actions/todo_actions'
import { allTodos } from "../../reducers/selectors";

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
        receiveTodos: (todos) => dispatch(receiveTodos(todos)),
        removeTodo: (todo) => dispatch(removeTodo(todo)),
        fetchTodos: () => dispatch(fetchTodos()),
        createTodo: (todo) => dispatch(createTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)