import {
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
    UPDATE_TASK_PROGRESS,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY,
  } from '../actions/taskActions';
  
  const initialState = {
    tasks: [],
    categories: []
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return { ...state, tasks: [...state.tasks, action.payload] };
      case EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? action.payload : task
          )
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
      case UPDATE_TASK_PROGRESS:
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.taskId
              ? { ...task, progress: action.payload.progress }
              : task
          )
        };
      case ADD_CATEGORY:
        return { ...state, categories: [...state.categories, action.payload] };
      case EDIT_CATEGORY:
        return {
          ...state,
          categories: state.categories.map(category =>
            category.id === action.payload.id ? action.payload : category
          )
        };
      case DELETE_CATEGORY:
        return {
          ...state,
          categories: state.categories.filter(category => category.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  