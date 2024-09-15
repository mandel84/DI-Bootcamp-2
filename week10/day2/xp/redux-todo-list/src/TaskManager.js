import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from './redux/plannerActions';

const TaskManager = () => {
  const [taskText, setTaskText] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const dispatch = useDispatch();
  const { selectedDay, tasks } = useSelector((state) => state);

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(selectedDay, taskText));
      setTaskText('');
    }
  };

  const handleEditTask = (taskId) => {
    const dayTasks = tasks[selectedDay];
    const taskToEdit = dayTasks.find((task) => task.id === taskId);
    setTaskText(taskToEdit.text);
    setEditMode(true);
    setEditTaskId(taskId);
  };

  const handleSaveEdit = () => {
    if (taskText.trim()) {
      dispatch(editTask(selectedDay, editTaskId, taskText));
      setTaskText('');
      setEditMode(false);
      setEditTaskId(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a task"
      />
      {editMode ? (
        <button onClick={handleSaveEdit}>Save Task</button>
      ) : (
        <button onClick={handleAddTask}>Add Task</button>
      )}
    </div>
  );
};

export default TaskManager;
