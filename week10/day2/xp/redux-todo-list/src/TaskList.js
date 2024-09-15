import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from './redux/plannerActions';

const TaskList = () => {
  const dispatch = useDispatch();
  const { selectedDay, tasks } = useSelector((state) => state);

  const dayTasks = tasks[selectedDay] || [];

  const handleDelete = (taskId) => {
    dispatch(deleteTask(selectedDay, taskId));
  };

  return (
    <div>
      <h2>Tasks for {selectedDay}</h2>
      <ul>
        {dayTasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
