import { TodoList } from './todo.js';

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Call mom');
todoList.addTask('Finish project');
todoList.addTask('Workout');

todoList.markTaskAsComplete('Buy groceries');
todoList.markTaskAsComplete('Finish project');

todoList.listAllTasks();
