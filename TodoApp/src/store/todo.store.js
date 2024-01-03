import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'all' ,
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('x'),
        new Todo('y'),
        new Todo('z'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('initStore 🚀');
}

const loadStore = () => {
    throw new Error('Not implemented')
}
/**
 * 
 * @param {String} description
 * */
const addTodo = (description) => {
    throw new Error('Not implemented');
}
/**
 * 
 * @param {String} todoId
 * */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}
const deleteTodo = () => {
    throw new Error('Not implemented');
}
const deleteCompleted = () => {
    throw new Error('Not implemented');
}
const setFilter = (newFilter = Filters.All) => {
    throw new Error('Not implemented');
}
const getCurrentFilter = () => {
    throw new Error('Not implemented');
}
 
export default{
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}