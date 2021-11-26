import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

// const mapDispatchToAddTodoProps = (
//   dispatch
// ) => {
//   return {
//     onClick: (text) => {
//       dispatch({
//         type: 'ADD_TODO',
//         id: nextTodoId++,
//         text
//       })
//     }
//   };
// };

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
          Add Todo
        </button>
    </div>
  );
};

// the default behavior of connect() with no arguments is
// to not subscribe to the store and to inject just dispatch function as a prop
export default connect()(AddTodo);