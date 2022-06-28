import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, removeTodo, receiveTodos, receiveTodo} from './actions/todo_actions'
import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP, removeStep, receiveSteps, receiveStep} from './actions/step_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root")
    ReactDOM.render((<h1> Todos App </h1>), root)
    const store = configureStore()
    window.store = store
    window.receiveTodo = receiveTodo
    window.receiveTodos =receiveTodos
    window.removeTodo = removeTodo
    window.removeStep = removeStep
    window.receiveStep = receiveStep
    window.receiveSteps = receiveSteps
})