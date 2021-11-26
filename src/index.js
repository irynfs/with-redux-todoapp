import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

// // class Provider extends Component {
// //   getChildContext() {
// //     return {
// //       store: this.props.store
// //     };
// //   }

// //   render() {
// //     return this.props.children;
// //   }
// // }
// // // childContextTypes describes what Provider passes to child components
// // Provider.childContextTypes = {
// //   store: PropTypes.object
// // };

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// // console.log('Initial state:');
// // console.log(store.getState());

// // console.log('Dispatching ADD_TODO:');
// // store.dispatch({
// //   type: 'ADD_TODO',
// //   id: 0,
// //   text: 'Learn Redux'
// // });

// // console.log('Current state:');
// // console.log(store.getState());

// // console.log('Dispatching SET_VISIBILITY_FILTER:');
// // store.dispatch({
// //   type: 'SET_VISIBILITY_FILTER',
// //   filter: 'COMPLETED'
// // });

// // console.log('Current state:');
// // console.log(store.getState());

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
