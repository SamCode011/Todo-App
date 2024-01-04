import { Todo } from '../todos/models/todo.model';

export const Filters = {
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
    loadStore();
    console.log('initStore 🚀');
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;
    const {todos = [] ,filter =Filters.All}=JSON.parse(localStorage.getItem('state'));
    state.todos = todos ;
    state.filter = filter ;
}
const saveStateLocalStorage = () => {
    /* console.log(JSON.stringify(state)); */
    localStorage.setItem('state',JSON.stringify(state));
    
}
const getTodos = (filter = Filters.All) => {

    switch(filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter( todo => todo.done);
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`);

    }
}
/**
 * 
 * @param {String} description
 * */
const addTodo = (description) => {
    if ( !description)  throw new Error('Description is requeried');
    state.todos.push( new Todo(description));
    saveStateLocalStorage();
   
}
/**
 * 
 * @param {String} todoId
 * */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo ;
    });
    saveStateLocalStorage();
}
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId);
    saveStateLocalStorage();
}
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done);
    saveStateLocalStorage();
}
/* *
*
* @param {Filters} newFilter
**/
const setFilter = (newFilter = Filters.All) => {
    state.filter =newFilter ;
    saveStateLocalStorage();
}
const getCurrentFilter = () => {
    return state.filter ;
}
 
export default{
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}