import  './style.css';
// import { Todo } from './classes/todo.class.js'
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
// const tarea = new Todo('Aprender JavaScript');


// todoList.nuevoTodo( tarea );

// crearTodoHtml( tarea );

// localStorage.setItem('mi-key', 'ABC123')
// sessionStorage.setItem('mi-key', 'ABC123')

todoList.todos.forEach( todo => crearTodoHtml(todo));

console.log('todos', todoList.todos);