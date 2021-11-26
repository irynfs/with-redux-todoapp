import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import todoApp from './reducers';
import { loadState, saveState } from './localStorage';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  if (!console.group) return rawDispatch;

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    todoApp,
    persistedState
  );

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store;
};

export default configureStore;

// // sometimes we want to load some existing data into the app synchronously before it starts.
// // For example, we might have persisted todos from the previous session and we might want to load
// // this slice of the state into the app right before it starts.
// const persistedState = loadState();

// // when creating a redux store, it's initial state is determined by the root reducer.
// // The initial state of the store:
// // {
// //   todos: [],
// //   visibilityFilter: 'SHOW_ALL'
// // }

// // second argument to createStore will override the values specified by the reducers.
// // Whatever value we pass to createStore as a second argument is going to end up in the root reducer
// // as the state argument instead of undefined
// const store = createStore(
//   todoApp,
//   persistedState
// );

// // wrapping the callback in a throttle call ensures that the inner function
// // is not going to be called more often than the number of the milliseconds specified.
// // So, we have a garantee that we only write to the local storage (= call passed function)
// // at most once a second
// store.subscribe(throttle(() => {
//   // we want to store only todos in the local storage (but not the visibilityFilter)
//   saveState({
//     todos: store.getState().todos
//   });
// }, 1000));