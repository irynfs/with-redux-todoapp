export const loadState = () => {
  // wrap into a try catch because calls to localStorage getItem can fail
  // is the user privacy mode does not allow the use of local storage
  try {
    const serializedState = localStorage.getItem('state');
    // means that 'state' key does not exist
    if (serializedState === null) {
      // return undefined to let the reducers initialize the application
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    // return undefined to let the reducers initialize the application
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
    // Ignore write errors.
  }
};