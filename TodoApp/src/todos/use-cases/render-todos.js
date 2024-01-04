import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";

/**
 * @param {String}elementId
 * @param {Todo} todos
 *  */ 

export const renderTodos = ( elementId, todos = [] ) => {

    //TODO reference 
    const element = document.querySelector(elementId);

    todos.forEach( todo => {
        element.append( createTodoHTML(todo));

    });


    console.log(elementId,todos);
}