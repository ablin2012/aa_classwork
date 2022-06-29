import { connect } from "react-redux";
import {TodoDetailView} from "./todo_detail_view"
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, removeTodo, receiveTodos, receiveTodo} from '../../actions/todo_actions'

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
        receiveTodos: (todos) => dispatch(receiveTodos(todos)),
        removeTodo: (todo) => dispatch(removeTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView)