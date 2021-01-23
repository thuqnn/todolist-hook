import { combineReducers } from "redux";

const initialState = {
  taskLists: [],
  currentText: "",
};

const addTodos = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TEXT": {
      return {
        ...state,
        currentText: action.payload,
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        taskLists: [...state.taskLists, action.payload],
      };
    }
    case "HANDLE_CHANGE_COMPLETED_TODO": {
      return {
        ...state,
        taskLists: state.taskLists.map((task) =>
          task.id === action.payload.taskId
            ? {
                ...task,
                isCompleted: action.payload.isCompleted,
                completedDate: new Date().getTime(),
              }
            : task
        ),
      };
    }
    case "HANDLE_CHANGE_FAVORITE_TODO": {
      return {
        ...state,
        taskLists: state.taskLists.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, isFavorite: action.payload.isFavorite }
            : task
        ),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default combineReducers({
  addTodos,
});
