import { ADD_TASK, EDIT_TASK, DELETE_TASK, SELECT_DAY } from './plannerActions';

const initialState = {
  selectedDay: new Date().toISOString().split('T')[0], 
  tasks: {}, 
};

const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { day, task } = action.payload;
      const dayTasks = state.tasks[day] || [];
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [day]: [...dayTasks, { id: Date.now(), text: task }],
        },
      };
    }
    case EDIT_TASK: {
      const { day, taskId, newTask } = action.payload;
      const dayTasks = state.tasks[day].map((task) =>
        task.id === taskId ? { ...task, text: newTask } : task
      );
      return {
        ...state,
        tasks: { ...state.tasks, [day]: dayTasks },
      };
    }
    case DELETE_TASK: {
      const { day, taskId } = action.payload;
      const dayTasks = state.tasks[day].filter((task) => task.id !== taskId);
      return {
        ...state,
        tasks: { ...state.tasks, [day]: dayTasks },
      };
    }
    case SELECT_DAY:
      return { ...state, selectedDay: action.payload };
    default:
      return state;
  }
};

export default plannerReducer;
