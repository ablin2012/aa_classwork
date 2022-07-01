import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, fetchTodos, removeTodo, receiveTodos, receiveTodo} from './actions/todo_actions'
import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP, removeStep, receiveSteps, receiveStep} from './actions/step_actions'
import Root from './components/root'
import {allTodos} from './reducers/selectors'
import * as APIUtil from './util/todo_api_util'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root")
    const store = configureStore()
    window.store = store
    window.receiveTodo = receiveTodo 
    window.allTodos = allTodos
    window.receiveTodos = receiveTodos
    window.removeTodo = removeTodo
    window.removeStep = removeStep
    window.receiveStep = receiveStep
    window.receiveSteps = receiveSteps
    window.fetchTodos = fetchTodos
    ReactDOM.render(<Root store={store}/>, root)
})