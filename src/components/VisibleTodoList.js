import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TodoList from './TodoList';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';

// mapStateToProps takes the state of the redux store
// and returns the props for the presentational component
// calculated from it
// these props will be updated any time the state changes
const mapStateToProps = (state, { match: { params }}) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
});

// mapDispatchToProps takes the store's dispatch method
// and returns the props that use the dispatch method
// to dispatch actions
// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id))
//   }
// });
// connect() - to create a container component from mapStateToProps and mapDispatchToProps,
// that is going to render a presentational component (TodoList)
//
// it will calculate the props to pass to the TodoList by merging the objects
// returned from mapStateToProps, mapDispatchToProps and its own props.
//
// TodoList is a presentational component which is connected to the redux store
const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo}
)(TodoList));

export default VisibleTodoList;

// class VisibleTodoList extends Component {
//   componentDidMount() {
//     const { store } = this.context;
//     // the unsubscribe function is the return value of the store subscribe method
//     this.unsubscribe = store.subscribe(
//       () => this.forceUpdate()
//     );
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     const { store } = this.context;
//     const state = store.getState();

//     return (
//       <TodoList
//         todos={getVisibleTodos(
//           state.todos,
//           state.visibilityFilter
//         )}
//         onTodoClick={id =>
//           store.dispatch({
//             type: 'TOGGLE_TODO',
//             id
//           })
//         }
//       />
//     );
//   }
// }
// // contextTypes describes what VisibleTodoList receives
// VisibleTodoList.contextTypes = {
//   store: PropTypes.object
// };