class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
      console.log(`Task added: ${task}`);
    }
  
    markTaskAsComplete(task) {
      const index = this.tasks.findIndex(t => t.task === task);
      if (index !== -1) {
        this.tasks[index].completed = true;
        console.log(`Task marked as complete: ${task}`);
      } else {
        console.log(`Task not found: ${task}`);
      }
    }
  
    listAllTasks() {
      console.log("Tasks:");
      this.tasks.forEach((t, index) => {
        const status = t.completed ? '✅' : '❌';
        console.log(`${index + 1}. ${t.task} ${status}`);
      });
    }
  }
  
  export { TodoList };
  