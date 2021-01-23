export const onAddText = (value) => ({
  type: "ADD_TEXT",
  payload: value,
});

export const onAddTodos = (newTaskName) => ({
  type: "ADD_TODO",
  payload: {
    id: new Date().getTime(),
    createdDate: new Date().getTime(),
    completedDate: null,
    taskName: newTaskName,
    isCompleted: false,
    isFavorite: false,
  },
});

export const onChangeCompletedTodo = (taskId, newStatus) => ({
  type: "HANDLE_CHANGE_COMPLETED_TODO",
  payload: {
    taskId,
    isCompleted: newStatus,
  },
});

export const onChangeFavoriteTodo = (taskId, newStatus) => ({
  type: "HANDLE_CHANGE_FAVORITE_TODO",
  payload: {
    taskId,
    isFavorite: newStatus,
  },
});

//warning: action.payload.isFavorite or action.payload.isCompleted with reducer
