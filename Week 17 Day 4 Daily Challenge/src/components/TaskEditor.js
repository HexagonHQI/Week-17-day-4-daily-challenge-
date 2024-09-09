import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, updateTaskProgress } from '../redux/actions/taskActions';

const TaskEditor = ({ task }) => {
  const dispatch = useDispatch();

  const handleEdit = useCallback((updatedTask) => {
    dispatch(editTask(updatedTask));
  }, [dispatch]);

  const handleProgressUpdate = useCallback((progress) => {
    dispatch(updateTaskProgress(task.id, progress));
  }, [dispatch, task.id]);

  return (
    <div>
      <h3>Edit Task</h3>
      <button onClick={() => handleEdit({...task, name: 'Updated Task'})}>
        Edit Task
      </button>
      <button onClick={() => handleProgressUpdate('completed')}>
        Mark as Completed
      </button>
    </div>
  );
};

export default TaskEditor;
