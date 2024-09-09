export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK_PROGRESS = 'UPDATE_TASK_PROGRESS';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const updateTaskProgress = (taskId, progress) => ({
  type: UPDATE_TASK_PROGRESS,
  payload: { taskId, progress },
});

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const editCategory = (category) => ({
  type: EDIT_CATEGORY,
  payload: category,
});

export const deleteCategory = (categoryId) => ({
  type: DELETE_CATEGORY,
  payload: categoryId,
});
