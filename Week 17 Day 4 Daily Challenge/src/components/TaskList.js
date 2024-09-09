import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasksByCategory } from '../redux/selectors/taskSelectors';

const TaskList = ({ selectedCategoryId }) => {
  const tasks = useSelector(state => selectTasksByCategory(state, selectedCategoryId));

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} - {task.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
