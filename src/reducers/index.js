import { combineReducers } from 'redux';

import todos, * as fromTodos from './todos';

const todoApp = combineReducers({ todos });

export default todoApp;

// selector
export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// };