import { createSelector } from 'reselect';

export const selectTasksByCategory = (state, categoryId) =>
  state.tasks.tasks.filter(task => task.categoryId === categoryId);

export const selectCompletedTasks = (state) =>
  state.tasks.tasks.filter(task => task.completed).length;

export const selectCategoryById = (state, categoryId) =>
  state.tasks.categories.find(category => category.id === categoryId);
