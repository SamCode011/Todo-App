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

export default{
    initStore,
}